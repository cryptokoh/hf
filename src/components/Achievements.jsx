// src/components/Achievements.jsx

import React, { useEffect, useState } from 'react';
import achievementLevels from '../config/achievementLevels';
import supabase from '../supabaseClient';

function Achievements({ userId }) {
  const [userStats, setUserStats] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);

  useEffect(() => {
    async function fetchUserStats() {
      const { data, error } = await supabase
        .from('users')
        .select('total_donations, tasks_completed')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user stats:', error);
        return;
      }

      setUserStats(data);
      determineAchievementLevel(data);
    }

    function determineAchievementLevel(stats) {
      const level = achievementLevels.find((level) => {
        return (
          stats.total_donations >= level.criteria.totalDonations &&
          stats.tasks_completed >= level.criteria.tasksCompleted
        );
      });

      setCurrentLevel(level || achievementLevels[achievementLevels.length - 1]);
    }

    fetchUserStats();
  }, [userId]);

  if (!userStats || !currentLevel) {
    return <div>Loading your achievements...</div>;
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-4">Achievement Level: {currentLevel.title}</h3>
      <div className="flex items-center">
        <img src={currentLevel.icon} alt={currentLevel.name} className="h-16 w-16 mr-4" />
        <div>
          <p className="text-lg">{currentLevel.description}</p>
          <p className="mt-2">Total Donations: {userStats.total_donations} ETH</p>
          <p>Tasks Completed: {userStats.tasks_completed}</p>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

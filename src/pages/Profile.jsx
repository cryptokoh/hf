// src/pages/Profile.jsx

import React from 'react';
import Achievements from '../components/Achievements';
import { useAuth } from '../hooks/useAuth';

function Profile() {
  const session = useAuth();
  const userId = session?.user?.id;

  if (!session) {
    return (
      <div className="p-4">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
      <Achievements userId={userId} />
    </div>
  );
}

export default Profile;

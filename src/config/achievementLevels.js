// src/config/achievementLevels.js

const achievementLevels = [
  {
    id: 5,
    name: 'Pinky Finger',
    title: 'Legend',
    criteria: {
      totalDonations: 100,
      tasksCompleted: 100,
    },
    description: 'Lifetime contributor with exceptional dedication.',
    icon: '/icons/pinky.png',
  },
  {
    id: 4,
    name: 'Ring Finger',
    title: 'Patron',
    criteria: {
      totalDonations: 50,
      tasksCompleted: 50,
    },
    description: 'Elite contributor recognized for substantial support.',
    icon: '/icons/ring.png',
  },
  {
    id: 3,
    name: 'Middle Finger',
    title: 'Advocate',
    criteria: {
      totalDonations: 20,
      tasksCompleted: 20,
    },
    description: 'Significantly promotes and supports projects.',
    icon: '/icons/middle.png',
  },
  {
    id: 2,
    name: 'Index Finger',
    title: 'Contributor',
    criteria: {
      totalDonations: 5,
      tasksCompleted: 5,
    },
    description: 'Active user contributing regularly.',
    icon: '/icons/index.png',
  },
  {
    id: 1,
    name: 'Thumb',
    title: 'Helper',
    criteria: {
      totalDonations: 0,
      tasksCompleted: 0,
    },
    description: 'New participant starting to contribute.',
    icon: '/icons/thumb.png',
  },
];

export default achievementLevels;

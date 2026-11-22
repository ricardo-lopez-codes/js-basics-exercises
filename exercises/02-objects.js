function summarizeTasks(tasks) {
  return tasks.reduce(
    (summary, task) => {
      if (task.completed) {
        summary.completed += 1;
      } else {
        summary.pending += 1;
      }

      const category = task.category || 'uncategorized';
      if (!summary.byCategory[category]) {
        summary.byCategory[category] = [];
      }
      summary.byCategory[category].push(task.title);

      return summary;
    },
    {
      completed: 0,
      pending: 0,
      byCategory: {}
    }
  );
}

function updateUserProfile(user, updates) {
  const base = user ? { ...user } : {};
  const patch = updates ? { ...updates } : {};

  const mergedPreferences = {
    ...(base.preferences || {}),
    ...(patch.preferences || {})
  };

  return {
    ...base,
    ...patch,
    preferences: mergedPreferences
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    summarizeTasks,
    updateUserProfile
  };
}

if (typeof window !== 'undefined') {
  window.summarizeTasks = summarizeTasks;
  window.updateUserProfile = updateUserProfile;
}

const sampleTasks = [
  { id: 1, title: 'Set up ESLint config', category: 'development', completed: true },
  { id: 2, title: 'Refactor state store', category: 'development', completed: false },
  { id: 3, title: 'Draft quarterly report', category: 'management', completed: true },
  { id: 4, title: 'Review PR #42', category: 'development', completed: false },
  { id: 5, title: 'Team sync meeting', category: 'meetings', completed: true }
];

console.log('--- Exercise 6: Object Transformation & Grouping ---');
console.log(JSON.stringify(summarizeTasks(sampleTasks), null, 2));

const initialUser = {
  id: 'usr_101',
  name: 'Alex Rivera',
  email: 'alex@example.com',
  preferences: {
    theme: 'dark',
    notifications: true,
    language: 'en'
  }
};

const profileUpdates = {
  name: 'Alex M. Rivera',
  preferences: {
    theme: 'slate',
    language: 'es'
  }
};

const updatedUser = updateUserProfile(initialUser, profileUpdates);

console.log('--- Exercise 7: Deep Property Access & Immutability ---');
console.log('Updated Profile:', JSON.stringify(updatedUser, null, 2));
console.log('Original is distinct instance:', initialUser !== updatedUser);
console.log('Preferences is distinct instance:', initialUser.preferences !== updatedUser.preferences);
console.log('Original preferences intact:', initialUser.preferences.theme === 'dark');
console.log('Updated preferences applied:', updatedUser.preferences.theme === 'slate');
console.log('Preserved untouched preference:', updatedUser.preferences.notifications === true);

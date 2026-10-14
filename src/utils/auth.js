const USER_KEY = 'codekids_current_user';
const USERS_KEY = 'codekids_all_users';

export function getCurrentUser() {
  try {
    const u = localStorage.getItem(USER_KEY);
    return u ? JSON.parse(u) : null;
  } catch {
    return null;
  }
}

export function login(username, avatar = '🦊') {
  const user = {
    username: username.trim(),
    avatar,
    loginAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    if (!users.includes(user.username)) {
      users.push(user.username);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
  } catch {}

  return user;
}

export function updateProfile({ username, avatar }) {
  const current = getCurrentUser();
  if (!current) return null;

  const oldUsername = current.username;
  const newUsername = username.trim() || oldUsername;

  // Kalau username berubah, rename progress key juga
  if (newUsername !== oldUsername) {
    const oldKey = `codekids_progress_${oldUsername}`;
    const newKey = `codekids_progress_${newUsername}`;
    const progress = localStorage.getItem(oldKey);
    if (progress) {
      localStorage.setItem(newKey, progress);
      localStorage.removeItem(oldKey);
    }
  }

  const updated = {
    ...current,
    username: newUsername,
    avatar: avatar || current.avatar,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(USER_KEY, JSON.stringify(updated));

  // Update users list
  try {
    let users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    users = users.filter((u) => u !== oldUsername);
    if (!users.includes(newUsername)) users.push(newUsername);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch {}

  return updated;
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}

export function getAllUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}

export const avatarPilihan = [
  '🦊', '🐱', '🐼', '🦁', '🐨', '🐸', '🦉', '🐯',
  '🦄', '🐙', '🐢', '🦋', '🐝', '🦖', '🐳', '🦕',
];
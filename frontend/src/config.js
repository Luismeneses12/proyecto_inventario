export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

export const apiFetch = (path, options = {}) => {
  const url = path.startsWith('http') ? path : `${API_BASE_URL}${path}`;
  const headers = {
    ...options.headers,
    'ngrok-skip-browser-warning': 'true',
  };
  return fetch(url, { ...options, headers });
};

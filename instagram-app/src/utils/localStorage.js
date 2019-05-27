export const insta_key = 'insta_key';

export const updateStorage = (key, state) => {
  window.localStorage.setItem(key, JSON.stringify(state));
};

export const getStorage = (key) => JSON.parse(window.localStorage.getItem(key));

export const checkStorage = (key) => window.localStorage.getItem(key);
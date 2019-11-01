import { isServer } from './index';
const TOKEN_NAME = '_meow';

export const saveToken = token =>
  !isServer && token ? localStorage.setItem(TOKEN_NAME, token) : null;

export const getToken = () =>
  !isServer ? localStorage.getItem(TOKEN_NAME) : null;

export const removeToken = () =>
  !isServer ? localStorage.removeItem(TOKEN_NAME) : null;

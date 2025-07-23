import baseApi from 'api/base.api';
import axios from 'axios';
import type { UserCredentials, UserInfo } from 'types/types';

export const login = async (params: UserCredentials): Promise<UserInfo> => {
  try {
    const res = await baseApi.post('/login', params);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Unknown error';

      throw new Error(message);
    }
    throw new Error('Unknown error occurred');
  }
};

export const register = async (params: UserCredentials): Promise<UserInfo> => {
  try {
    const res = await baseApi.post('/register', params);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Unknown error';
      throw new Error(message);
    }
    throw new Error('Unknown error occurred');
  }
};

export const authApi = {
  login,
  register,
};

import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
  timeout: 10000,
  timeoutErrorMessage: 'timeout',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

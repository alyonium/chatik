import { io } from 'socket.io-client';

export const socket = io(`${import.meta.env.VITE_API_SOCKET_URL}/chat`, {
  reconnectionDelayMax: 10000,
  auth: {
    token: `Bearer ${localStorage.getItem('token')}`
  },
  autoConnect: false
});

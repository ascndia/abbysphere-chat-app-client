import { createContext } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const SocketContext = createContext(socket);

export default SocketContext;
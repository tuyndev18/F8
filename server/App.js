import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ErrorHandling } from './Utils/ErrorHandling.js';
import ParentRoute from './routes/ParentRoute.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import socket from './Socket/Socket.js';
import ConnectDB from './Config/ConnectDB.js';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST'],
  },
});

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

socket(io);

//Route configuration
ParentRoute(app);

//ERROR HANDLING
app.use(ErrorHandling);

//404 NOT FOUND
app.use('*', (req, res) => {
  res.status(404).json({ mess: '404 Not Found' });
});

//CONNECT TO MONGODB
ConnectDB();

//listen to server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log('server is running');
});

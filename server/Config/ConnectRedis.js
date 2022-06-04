import redis from 'redis';

export const client = redis.createClient({
  socket: {
    host: process.env.HOST_REDIS,
    port: process.env.PORT_REDIS,
  },
  username: process.env.USER_REDIS,
  password: process.env.PASS_REDIS,
});

(async () => {
    try {
      await client.connect();
    } catch (error) {
      console.error('error while connecting redis', error);
    }
  })();
  
client.on('ready', () => {
  console.log('redis is connected');
});

client.on('error', (err) => {
  console.log('redis is disconnected: ', err);
});

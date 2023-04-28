import createServer from './createServer';

const server = createServer();

server.listen(8000, () => {
  console.log('server started');
});

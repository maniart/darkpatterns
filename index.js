import { Server as WSserver } from 'ws';
import { createServer } from 'http';
import gamepad  from 'gamepad';
import express from 'express';

// Initialize `gamepad` library
gamepad.init();

// Create a game loop and poll for events
setInterval(gamepad.processEvents, 16);

// Scan for new gamepads as a slower rate
setInterval(gamepad.detectDevices, 500);

// Create the `express` app
// Setup static assets serving
const app = express()
  .use(express.static(`${__dirname}/public`))
  .use('/bundle.js', express.static(`${__dirname}/public/build/bundle.js`));

// Create http server and listen
const server = createServer(app)
  .listen(7878, () => {
    console.log(`
      dark patterns is running on 7878
    `);
  });

// Create `WebSocket` server and pass in the `http` server
const wsServer = new WSserver({ server });

// Setup events
wsServer.on('connection', (ws) => {
  console.log('___ ws server connection established');

  // Listen for move events on all gamepads
  gamepad.on('move', (id, axis, value) => {
    const cmd = { id, axis, value, name: 'move' };
    ws.send(JSON.stringify(cmd), (err)=> {
      console.log('___ error in WS: ', err);
    });
    console.log(cmd);
  });

  // Listen for button up events on all gamepads
  gamepad.on('up', (id, num) => {
    const cmd = { id, num, name: 'up' };
    ws.send(JSON.stringify(cmd), (err)=> {
      console.log('___ error in WS: ', err);
    });
    console.log(cmd);
  });

  // Listen for button down events on all gamepads
  gamepad.on('down', (id, num) => {
    const cmd = { id, num, name: 'down' };
    ws.send(JSON.stringify(cmd), (err)=> {
      console.log('___ error in WS: ', err);
    });
    console.log(cmd);
  });

  ws.on('close', () => {
    console.log('___ closing ws server connection');
  });
});

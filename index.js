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
  ws.on('close', () => {
    console.log('___ closing ws server connection');
  });
});


// Listen for move events on all gamepads
gamepad.on('move', (id, axis, value) => {
  console.log('move', {
    id: id,
    axis: axis,
    value: value,
  });
});

// Listen for button up events on all gamepads
gamepad.on('up', (id, num) => {
  console.log('up', {
    id: id,
    num: num,
  });
});

// Listen for button down events on all gamepads
gamepad.on('down', (id, num) => {
  console.log('down', {
    id: id,
    num: num,
  });
});

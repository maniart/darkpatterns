import { createServer } from 'http';
import express from 'express';

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

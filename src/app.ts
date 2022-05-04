import express from 'express';
const app = express();
const port = 3000;
import router from './config/routes';
import connect from './config/database';
import 'dotenv/config';

app.use(express.static('public'));
app.use(router);
connect();

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// unhandles error
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
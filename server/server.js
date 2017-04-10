import express from 'express';
import cheerio from 'cheerio'
import config from './config/config';
import expressConfig from './config/express';
import cors from './util/cors';
const serverConfig = config.getConfigByEnv();

const app = express();
app.use(cors);
expressConfig(app);

app.listen(serverConfig.port, 'localhost', (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Listening at http://localhost:${serverConfig.port}`);
})
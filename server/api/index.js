import express from 'express';
import {loadNetFlixList, scrapeNetFlixList} from './netFlixCat';

const routes = express.Router();


routes.use('/netFlixCategories', (req, res) => {
  res.status(200).send(loadNetFlixList());
});

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default routes;

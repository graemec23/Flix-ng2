import express from 'express';
import {netFlixCategories} from './netFlixCat';

const routes = express.Router();

routes.use('/netFlixCategories', netFlixCategories);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default routes;

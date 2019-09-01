import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Word!' });
});
// module.exports = routes;
export default routes;

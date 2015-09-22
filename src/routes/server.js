import Router from 'koa-router';

const router = Router();

router.get('/test', function *(next) {
  this.body = 'Test successful';
});

export default router;

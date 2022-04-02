import router from './index';

router.beforeEach((to, from, next) => {
  console.log('【to】', to);
  console.log('【form】', to);
  next();
});
router.afterEach(() => {
  console.log('[afterEach]: progress-bar');
});

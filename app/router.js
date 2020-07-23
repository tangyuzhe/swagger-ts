'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.redirect('/', '/swagger-ui.html', 302);
};

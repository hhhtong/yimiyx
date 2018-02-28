
import { Application } from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { router, controller } = app;

  /**
   * HomeController
   */
  router.get('/', controller.home.index);
  router.get('/server', controller.home.server);

  /**
   * SupplierController
   */
  router.post('/supplier/add', controller.supplier.add);
  router.post('/supplier/delete', controller.supplier.delete);
  router.post('/supplier/update', controller.supplier.update);
};

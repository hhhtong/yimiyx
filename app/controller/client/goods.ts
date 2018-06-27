import BaseController from '../../core/base-controller';

export default class GoodsController extends BaseController {

  async index() {
    const { service, ctx } = this;
    try {
      let { list, total } = await service.client.goods.query(ctx.query);

      for (const item of list) {
        item.categorys = this.$refix(item.categorys);
      }
      this.success({ list, total });
    } catch (error) {
      this.fail(error);
    }
  }
}
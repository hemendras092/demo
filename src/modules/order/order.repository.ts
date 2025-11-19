import { Order } from "./order.model";

export const orderRepository = {
  async create(data: any) {
    return await Order.create(data);
  },

  async findById(id: string) {
    return await Order.findByPk(id);
  },

  async findByUser(userId: string) {
    return await Order.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]]
    });
  }
};

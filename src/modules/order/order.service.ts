import { orderRepository } from "./order.repository";

export const orderService = {
  async createOrder(body: any) {
    if (!body.userId) throw new Error("userId is required");
    if (!body.amount) throw new Error("amount is required");

    return await orderRepository.create({
      userId: body.userId,
      amount: body.amount,
      status: body.status || "pending"
    });
  },

  async getOrder(id: string) {
    return await orderRepository.findById(id);
  },

  async getOrdersByUser(userId: string) {
    return await orderRepository.findByUser(userId);
  }
};

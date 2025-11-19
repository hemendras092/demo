import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { orderService } from "./order.service";

export const createOrder: APIGatewayProxyHandlerV2 = async (event) => {
    console.log("test");
  const body = JSON.parse(event.body || "{}");
  const order = await orderService.createOrder(body);

  return {
    statusCode: 201,
    body: JSON.stringify(order)
  };
};

export const getOrder: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters?.id!;
  const order = await orderService.getOrder(id);

  return {
    statusCode: 200,
    body: JSON.stringify(order)
  };
};

export const getOrdersByUser: APIGatewayProxyHandlerV2 = async (event) => {
  const userId = event.pathParameters?.userId!;
  const orders = await orderService.getOrdersByUser(userId);

  return {
    statusCode: 200,
    body: JSON.stringify(orders)
  };
};

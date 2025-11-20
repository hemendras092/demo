// src/modules/user/user.handler.ts
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { userService } from "./user.service";

export const createUser: APIGatewayProxyHandlerV2 = async (event) => {
  const data = JSON.parse(event.body || "{}");
  const user = await userService.createUser(data);

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "User created", data: user })
  };
};

export const getUser: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters?.id;
  const user = await userService.getUser(id!);

  if (!user) {
    return { statusCode: 404, body: JSON.stringify({ message: "Not found" }) };
  }

  return { statusCode: 200, body: JSON.stringify(user) };
};

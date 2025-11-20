import { userRepository } from "./user.repository";

export const userService = {
  async createUser(body: any) {
    return await userRepository.create(body);
  },

  async getUser(id: string) {
    return await userRepository.findById(id);
  }
};

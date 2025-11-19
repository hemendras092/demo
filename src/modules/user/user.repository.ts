import { User } from "./user.model";
import { getDb } from "../../shared/db";

export const userRepository = {
  async create(data: any) {
    const db = getDb();
    await db.sync(); // ensure table exists (optional in prod)

    return await User.create(data);
  },

  async findById(id: string) {
    return await User.findByPk(id);
  }
};

import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  ForeignKey
} from "sequelize-typescript";
import { User } from "../user/user.model";

@Table({ tableName: "orders", timestamps: true })
export class Order extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  userId!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  amount!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status!: string; // e.g., pending, completed, cancelled
}

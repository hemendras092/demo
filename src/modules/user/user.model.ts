import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType
} from "sequelize-typescript";

@Table({ tableName: "users", timestamps: true })
export class User extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id!: string;

  @Column({ type: DataType.STRING })
  name!: string;

  @Column({ type: DataType.STRING })
  email!: string;
}

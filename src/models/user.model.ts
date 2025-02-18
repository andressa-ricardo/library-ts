import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const User = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    books: {
      type: DataTypes.JSON,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;

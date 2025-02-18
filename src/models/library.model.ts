import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const Library = sequelize.define("library", {
  title: {
    type: DataTypes.STRING,
  },
  genre: {
    type: DataTypes.STRING,
  },
  pageCount: {
    type: DataTypes.INTEGER,
  },
  available: {
    type: DataTypes.BOOLEAN,
  },
});

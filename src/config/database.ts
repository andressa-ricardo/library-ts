import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão feita com sucesso.");
  } catch (error) {
    console.error(
      "Hove um erro ao tentar se conectar com o banco de dados.",
      error
    );
  }
})();

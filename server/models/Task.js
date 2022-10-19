const S = require("sequelize");
const db = require("../db");

class Task extends S.Model {}

Task.init(
  {
    description: {
      type: S.STRING,
      allowNull: false,
    },
    done: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "task" }
);

module.exports = Task;

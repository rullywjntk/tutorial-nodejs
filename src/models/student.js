const Sequelize = require("sequelize");
const db = require("../config/dbconfig");

const student = db.define(
  "student",
  {
    nim: Sequelize.INTEGER,
    name: Sequelize.STRING,
    idJurusan: Sequelize.STRING,
    address: Sequelize.STRING,
    angkatan: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// student.removeAttribute("id");

module.exports = student;

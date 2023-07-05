const model = require("../models/index");
const controller = {};

controller.getAllStudent = async (request, response) => {
  try {
    const student = await model.student.findAll({
      attributes: ["nim", "name"],
    });
    if (student.length > 0) {
      response.status(200).json({
        message: "Get student success",
        data: student,
      });
    } else {
      response.status(200).json({
        message: "Data is empty",
        data: [],
      });
    }
  } catch (error) {
    response.status(404).json({
      message: error.message,
    });
  }
};

controller.getStudentById = async (request, response) => {
  try {
    const student = await model.student.findAll({
      where: {
        nim: request.params.nim,
      },
    });
    if (student.length > 0) {
      response.status(200).json({
        message: "Get student success",
        data: student,
      });
    } else {
      response.status(200).json({
        message: "Student Not found",
        data: [],
      });
    }
  } catch (error) {
    response.status(404).json({
      message: error.message,
    });
  }
};

controller.createStudent = async (request, response) => {
  try {
    const student = await model.student.create({
      nim: request.body.nim,
      name: request.body.name,
    });
    response.status(201).json({
      message: "User created",
      data: student,
    });
  } catch (error) {
    response.status(404).json({
      message: error.message,
    });
  }
};

controller.updateStudent = async (request, response) => {
  try {
    await model.student.update(
      {
        name: request.body.name,
      },
      {
        where: {
          nim: request.params.nim,
        },
      }
    );
    response.status(200).json({
      message: "User updated",
    });
  } catch (error) {
    response.status(404).json({
      message: error.message,
    });
  }
};
controller.deleteStudent = async (request, response) => {
  try {
    const student = await model.student.destroy({
      where: {
        nim: request.params.nim,
      },
    });
    response.status(200).json({
      message: "User deleted",
    });
  } catch (error) {
    response.status(404).json({
      message: error.message,
    });
  }
};

module.exports = controller;

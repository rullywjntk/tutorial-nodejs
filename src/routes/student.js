const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.student.getAllStudent);
router.post("/", controller.student.createStudent);
router.get("/:nim", controller.student.getStudentById);
router.patch("/:nim", controller.student.updateStudent);
router.delete("/:nim", controller.student.deleteStudent);

module.exports = router;

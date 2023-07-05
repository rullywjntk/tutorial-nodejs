require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");

const studentRoute = require("./src/routes/student");

const { PORT } = process.env;

app.use(morgan("dev"));
app.use(express.json());

app.use("/student", studentRoute);

app.use((request, response) => {
  response.status(200).json({
    message: "Restful nodejs and express",
  });
});

app.use((request, response, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

module.exports = app;

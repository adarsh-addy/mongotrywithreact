const express = require("express");
const mongo_Form = require("../model/UserModel.js");
const routes = express.Router();

routes.post("/add_user", async (request, response) => {
  const user = new mongo_Form(request.body);

  try {
    await user.save();
    response.json({ data: user, msg: "data inserted successfully" });
  } catch (error) {
    response.status(500).send(error);
  }
});

routes.get("/users", async (request, response) => {
  const users = await mongo_Form.find({});

  try {
    response.json({ records: users, msg: "data Getted successfully" })
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = routes;

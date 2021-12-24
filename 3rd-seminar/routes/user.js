const { json } = require("express");
const express = require("express");
var router = express.Router();

const { fail, success } = require("../lib/util");
const users = require("./../dbMockup/user");
const statusCode = require("../constants/statusCode");
const responseMessage = require("../constants/responseMessage");

router.get("/", (req, res) => {
  // console.log(members);
  const result = {
    status: 200,
    message: "user~!",
  };
  res.status(200).send(result);
});

router.post("/signup", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  if (!email || !name || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const alreadyUser = users.filter((obj) => obj.email === email).length > 0;
  if (alreadyUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    password: password,
    email: email,
  };

  res
    .status(statusCode.OK)
    .send(success(responseMessage.CREATED_USER, newUser));
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // 400 bad request
  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 존재하지 않는 사용자
  const user = users.filter((obj) => obj.email === email)[0];
  if (!user) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  // 비밀번호 확인
  if (password !== user.password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }

  res.status(statusCode.OK).send(success(responseMessage.CREATED_USER, user));
});

module.exports = router;

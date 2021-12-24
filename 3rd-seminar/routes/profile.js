const express = require("express");
var router = express.Router();

const util = require("../lib/util");
const users = require("./../dbMockup/user");
const statusCode = require("../constants/statusCode");
const responseMessage = require("../constants/responseMessage");

router.get("/", (req, res) => {
  const result = {
    status: 200,
    message: "profile~!",
  };
  res.status(200).send(result);
});

router.get("/:id", async (req, res) => {
  //req params에서 데이터 가져오기
  const id = Number(req.params.id);
  //존재하는 아이디인지 확인 - 없다면 No user 반환
  const user = users.filter((user) => user.id === id)[0];

  if (!user) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  //성공 - login success와 함께 userId 반환
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
      userId: id,
    })
  );
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  if (!id || !newName) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const updatedUser = { ...existingUser, name: newName };

  res
    .status(statusCode.OK)
    .send(
      util.success(
        statusCode.OK,
        responseMessage.USER_UPDATE_SUCCESS,
        updatedUser
      )
    );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const newUsers = users.filter((user) => user.id !== Number(id));

  res
    .status(statusCode.OK)
    .send(
      util.success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, newUsers)
    );
});

module.exports = router;

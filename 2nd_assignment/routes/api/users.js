var express = require("express");
var router = express.Router();

/**
 * @route Get api/users/
 * @level 3
 */
router.get("/", (req, res) => {
  const result = {
    status: 200,
    message: "users api~!",
  };
  res.status(200).send(result);
});

/**
 * @route Get api/users/login
 * @level 3
 */
router.get("/login", (req, res) => {
  const result = {
    status: 200,
    message: "로그인 성공!",
  };
  res.status(200).send(result);
});

/**
 * @route Get api/users/signup
 * @level 3
 */
router.get("/signup", (req, res) => {
  const result = {
    status: 200,
    message: "회원가입 성공!",
  };
  res.status(200).send(result);
});

module.exports = router;

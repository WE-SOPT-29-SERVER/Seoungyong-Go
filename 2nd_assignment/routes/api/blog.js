const express = require("express");
const router = express.Router();

/**
 * @route Get api/blog/
 * @level 2
 */
router.get("/", (req, res) => {
  const result = {
    status: 200,
    message: "blog api~!",
  };
  res.status(200).send(result);
});

/**
 * @route Get api/blog/post
 * @level 2
 */
router.get("/post", (req, res) => {
  const result = {
    status: 200,
    message: "post 조회 성공!",
  };
  res.status(200).send(result);
});

module.exports = router;

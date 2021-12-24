var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  const result = {
    status: 200,
    message: "user~!",
  };
  res.status(200).send(result);
});

router.use("/user", require("./user"));
router.use("/profile", require("./profile"));

module.exports = router;

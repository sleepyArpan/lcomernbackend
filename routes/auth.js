const express = require("express");
const router = express.Router();
const {
  signout,
  signup,
  signin,
  isSignedIn,
} = require("../controllers/auth.js");
const { check, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name should be atleast 3 characters long"),
    check("email").isEmail().withMessage("email is required"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password should be atleast 3 character"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("email is required"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password should be provided"),
  ],
  signin
);

router.get("/signout", signout);


module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js")
const UserController = require("../controllers/users.js");

router.get("/signup",UserController.renderSignup);

router.post("/signup",wrapAsync(UserController.signupUser));

router.get("/login",UserController.renderLogin);

router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local",{
        failureRedirect:'/login',
        failureFlash: true
    }),UserController.loginUser
    );

router.get("/logout",UserController.logoutUser);

module.exports = router;
const express = require("express");

const { ctrlWrapper } = require("../../helpers/");

const ctrl = require("../../controllers/auth");

const { validation, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// register
router.post(
    "/signup",
    validation(schemas.regAndLogSchema),
    ctrlWrapper(ctrl.signup)
);

// signin
router.post(
    "/login",
    validation(schemas.regAndLogSchema),
    ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
module.exports = router;
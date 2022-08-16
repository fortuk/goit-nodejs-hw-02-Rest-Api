const express = require("express");

const ctrl = require("../../controllers/users");

const { ctrlWrapper } = require("../../helpers");

const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.patch(
    "/avatars",
    authenticate,
    upload.single("avatar"),
    ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
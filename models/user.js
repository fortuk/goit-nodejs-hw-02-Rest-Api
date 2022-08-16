const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const userSchema = Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        match: emailRegexp,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 6,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
        required: true,
    },
}, { versionKey: false, timestamps: true });

const User = model("user", userSchema);

const regAndLogSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
    regAndLogSchema,
};

module.exports = {
    User,
    schemas,
};
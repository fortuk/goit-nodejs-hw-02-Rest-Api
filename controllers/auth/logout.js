const { User } = require("../../models/user");

const logout = async(req, res) => {
    const { id } = req.user;
    await User.findByIdAndUpdate(id, { token: "" });
    res.status(204, "No Content").json();
};

module.exports = logout;
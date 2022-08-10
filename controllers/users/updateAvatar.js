const { User } = require("../../models/user");
const { avatarSize } = require("../../helpers");
const path = require("path");
const fs = require("fs/promises");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async(req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { id } = req.user;
    try {
        const imageName = `${id}${originalname}`;
        const resultUpload = path.join(avatarDir, imageName);
        await avatarSize(tempUpload);
        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join("public", "avatars", imageName);
        await User.findByIdAndUpdate(id, { avatarURL });
        res.json({ avatarURL });
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    }
};

module.exports = updateAvatar;
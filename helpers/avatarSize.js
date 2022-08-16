const Jimp = require("jimp");

const avatarSize = async(imgPath) => {
    const avatar = await Jimp.read(imgPath);
    avatar.resize(250, 250);
};

module.exports = avatarSize;
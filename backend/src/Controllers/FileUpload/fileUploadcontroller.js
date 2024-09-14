"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getImage = (req, res) => {
    try {
        return res.json({ message: "Image Uploade" });
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong while uploading the file" });
    }
};
exports.default = getImage;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeToPNG = exports.ChangeToJPEG = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const ChangeToJPEG = (req, res) => {
    var _a;
    try {
        const filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        if (!filename) {
            return res.status(400).json({ message: "No file Uploaded" });
        }
        if ((filename === null || filename === void 0 ? void 0 : filename.split(".")[1]) === "jpeg" || (filename === null || filename === void 0 ? void 0 : filename.split(".")[1]) === "jpg") {
            return res.status(201).json({ message: "Image is already in JPG or JPEG" });
        }
        const inputfilepath = path_1.default.resolve(__dirname, "../../../uploads", filename);
        const outputfilepath = path_1.default.resolve(__dirname, "../../../uploads", `${filename.split(".")[0]}.jpeg`);
        (0, sharp_1.default)(inputfilepath)
            .toFormat('jpeg', { palette: true })
            .toFile(outputfilepath)
            .then(() => {
            console.log("File converted");
            res.status(200).sendFile(outputfilepath);
        })
            .catch((error) => {
            console.log(error);
            res.status(400).json({ message: "Some error occured while converting file to JPEG" });
        });
    }
    catch (error) {
        res.send(400).json({ message: "Somthing went wrong while converting the image type to JPEG" });
    }
};
exports.ChangeToJPEG = ChangeToJPEG;
const ChangeToPNG = (req, res) => {
    var _a;
    try {
        const filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        if (!filename) {
            return res.status(400).json({ message: "No file Uploaded" });
        }
        if ((filename === null || filename === void 0 ? void 0 : filename.split(".")[1]) === "png") {
            return res.status(401).json({ message: "Image is already in PNG" });
        }
        const inputfilepath = path_1.default.resolve(__dirname, "../../../uploads", filename);
        const outputfilepath = path_1.default.resolve(__dirname, "../../../uploads", `${filename.split(".")[0]}.png`);
        (0, sharp_1.default)(inputfilepath)
            .toFormat('png', { palette: true })
            .toFile(outputfilepath)
            .then(() => {
            res.status(200).sendFile(outputfilepath);
        })
            .catch((error) => {
            res.status(400).json({ message: "Some error occured while converting file to PNG" });
        });
    }
    catch (error) {
        res.send(400).json({ message: "Somthing went wrong while converting the image type to PNG" });
    }
};
exports.ChangeToPNG = ChangeToPNG;

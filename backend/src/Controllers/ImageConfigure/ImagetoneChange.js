"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const ChangeImageTone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filename, brightness, contrast, saturation, rotateDeg } = req.body;
        if (!filename || !brightness || !contrast || !saturation || !rotateDeg) {
            return res.send(404).json({ message: "all parameter is required" });
        }
        const inputfilepath = path_1.default.resolve(__dirname, "../../../uploads", filename);
        if (!fs_1.default.existsSync(inputfilepath)) {
            return res.status(404).json({ message: "This image does not exits" });
        }
        const imageType = `${filename.split(".")[1]}`;
        const outputfilepath = path_1.default.resolve(__dirname, "../../../uploads", `processed.${imageType}`);
        yield (0, sharp_1.default)(inputfilepath)
            .modulate({
            brightness: parseInt(brightness),
            saturation: parseInt(saturation)
        })
            .rotate(parseInt(rotateDeg))
            .linear(parseInt(contrast))
            .toFile(outputfilepath)
            .then(() => {
            res.status(200).sendFile(outputfilepath);
        })
            .catch((error) => {
            res.status(400).json({ message: "Some error occured toning the image" });
        });
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});
exports.default = ChangeImageTone;

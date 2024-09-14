"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Fileupload_1 = __importDefault(require("../../Controllers/FileUpload/Fileupload"));
const FileUploadcontroller_1 = __importDefault(require("../../Controllers/FileUpload/FileUploadcontroller"));
const ImageFormatChange_1 = require("../../Controllers/ImageConfigure/ImageFormatChange");
const ImagetoneChange_1 = __importDefault(require("../../Controllers/ImageConfigure/ImagetoneChange"));
const router = express_1.default.Router();
router.post("/image", Fileupload_1.default.single('file'), FileUploadcontroller_1.default);
router.post("/changetoJPEG", ImageFormatChange_1.ChangeToJPEG);
router.post("/changetoPNG", ImageFormatChange_1.ChangeToPNG);
router.post("/changeimagetone", ImagetoneChange_1.default);
exports.default = router;

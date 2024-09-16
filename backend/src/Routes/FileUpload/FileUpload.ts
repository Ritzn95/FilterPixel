import express from "express";
import upload from "../../Controllers/FileUpload/Fileupload";
import getImage from "../../Controllers/FileUpload/FileUploadcontroller";
import {ChangeToJPEG, ChangeToPNG} from "../../Controllers/ImageConfigure/ImageFormatChange";
import {applyCrop, ChangeImageTone} from "../../Controllers/ImageConfigure/ImagetoneChange";

const router=express.Router();

router.post("/image",upload.single('file'),getImage);
router.post("/changetoJPEG",ChangeToJPEG);
router.post("/changetoPNG",ChangeToPNG);
router.post("/changeimagetone",ChangeImageTone);
router.post("/applyCrop",applyCrop)

export default router
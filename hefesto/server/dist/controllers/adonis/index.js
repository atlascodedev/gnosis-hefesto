"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizeAndCreateThumbnail = void 0;
const firebase_1 = __importStar(require("../../firebase"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const nanoid_1 = require("nanoid");
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const configuration_1 = require("@hefesto/configuration");
const converToSlug_1 = __importDefault(require("../../helper/converToSlug"));
const optimizeAndCreateThumbnail = async (req, res) => {
    if (!req.body.fileName) {
        return res
            .json({
            error: "A file name must be supplied",
        })
            .status(400);
    }
    if (!req.body.base64URI) {
        return res
            .json({
            error: "A base64 URI must be supplied",
        })
            .status(400);
    }
    // if (!req.body.fileExtension) {
    //   return res.json({
    //     error: "A file extension must be supplied",
    //   });
    // }
    const validURI = req.body.base64URI.split(";base64,").pop();
    const imgBuffer = Buffer.from(validURI, "base64");
    // Sanitize filename input
    const fileName = converToSlug_1.default(req.body.fileName);
    const fileExtension = "webp";
    const nanoID = nanoid_1.nanoid();
    let fileNameWithExtension = `${fileName}.${fileExtension}`;
    const baseCloudURL = "https://firebasestorage.googleapis.com/v0/b/";
    const uploadTime = new Date().toISOString();
    let fileDuplicated = await firebase_1.bucket
        .file(`${configuration_1.adonisConfig.path.rootFolder}/${configuration_1.adonisConfig.path.gallery}/${fileNameWithExtension}`)
        .exists();
    if (fileDuplicated[0]) {
        let fileDuplicateID = nanoid_1.nanoid(5);
        fileNameWithExtension = `${fileName}-${fileDuplicateID}.${fileExtension}`;
    }
    const imageMetadata = {
        cacheControl: "public, max-age=1296000",
        contentType: "image/webp",
        metadata: {
            uuid: nanoID,
            uploadDate: uploadTime,
            fileName: fileName,
        },
    };
    //   Temp dir file path for each img variation
    const fullResolutionImagePath = path_1.default.resolve(os_1.default.tmpdir(), fileNameWithExtension);
    const thumbnailImagePath = path_1.default.resolve(os_1.default.tmpdir(), `thumbnail-${fileNameWithExtension}`);
    const thumbnailBlurredImagePath = path_1.default.resolve(os_1.default.tmpdir(), `thumbnailBlur-${fileNameWithExtension}`);
    //   Cloud storage bucket path
    const bucketPath = {
        rootFolder: configuration_1.adonisConfig.path.rootFolder,
        gallery: `${configuration_1.adonisConfig.path.rootFolder}/${configuration_1.adonisConfig.path.gallery}/${fileNameWithExtension}`,
        galleryThumbnail: `${configuration_1.adonisConfig.path.rootFolder}/${configuration_1.adonisConfig.path.galleryThumbnail}/${fileNameWithExtension}`,
        galleryThumbnailBlur: `${configuration_1.adonisConfig.path.rootFolder}/${configuration_1.adonisConfig.path.galleryThumbnailBlur}/${fileNameWithExtension}`,
    };
    //   Convert images, transform them and save them to OS temp folder
    const fullImgBuffer = await sharp_1.default(imgBuffer)
        .toFormat("webp", { nearLossless: true })
        .toBuffer();
    await sharp_1.default(fullImgBuffer).toFile(fullResolutionImagePath);
    await sharp_1.default(fullImgBuffer).resize(null, 400).toFile(thumbnailImagePath);
    await sharp_1.default(fullImgBuffer)
        .resize(null, 300)
        .blur(10)
        .toFile(thumbnailBlurredImagePath);
    // Upload every file to storage bucket
    await firebase_1.bucket.upload(fullResolutionImagePath, {
        destination: bucketPath.gallery,
        metadata: imageMetadata,
    });
    await firebase_1.bucket.upload(thumbnailImagePath, {
        destination: bucketPath.galleryThumbnail,
        metadata: imageMetadata,
    });
    await firebase_1.bucket.upload(thumbnailBlurredImagePath, {
        destination: bucketPath.galleryThumbnailBlur,
        metadata: imageMetadata,
    });
    // Delete files from OS's temporary directory to free up memory
    try {
        fs_1.default.unlinkSync(fullResolutionImagePath);
        fs_1.default.unlinkSync(thumbnailImagePath);
        fs_1.default.unlinkSync(thumbnailBlurredImagePath);
    }
    catch (error) {
        console.log(error);
    }
    let optimizationResponse = {
        fileName: fileName,
        uuid: nanoID,
        gallery: `${baseCloudURL}${firebase_1.default.storage().app.options.storageBucket}/o/${configuration_1.adonisConfig.path.rootFolder}%2F${configuration_1.adonisConfig.path.gallery}%2F${fileName}.${fileExtension}?alt=media`,
        gallery_thumbnail: `${baseCloudURL}${firebase_1.default.storage().app.options.storageBucket}/o/${configuration_1.adonisConfig.path.rootFolder}%2F${configuration_1.adonisConfig.path.galleryThumbnail}%2F${fileName}.${fileExtension}?alt=media`,
        gallery_thumbnail_blur: `${baseCloudURL}${firebase_1.default.storage().app.options.storageBucket}/o/${configuration_1.adonisConfig.path.rootFolder}%2F${configuration_1.adonisConfig.path.galleryThumbnailBlur}%2F${fileName}.${fileExtension}?alt=media`,
    };
    return res.json(optimizationResponse).status(200);
};
exports.optimizeAndCreateThumbnail = optimizeAndCreateThumbnail;
//# sourceMappingURL=index.js.map
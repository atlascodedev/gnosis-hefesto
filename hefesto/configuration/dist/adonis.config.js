"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adonisConfig = exports.adonisImagePath = void 0;
exports.adonisImagePath = {
    rootFolder: "adonis",
    gallery: "gallery",
    galleryThumbnail: "gallery_thumbnail",
    galleryThumbnailBlur: "gallery_thumbnail_blur",
};
exports.adonisConfig = {
    path: exports.adonisImagePath,
    createBlur: true,
    storageBucketPath: "portalbens-nextjs-hefesto.appspot.com",
    baseCloudURL: "https://firebasestorage.googleapis.com/v0/b/",
};
// DONT FORGET TO REPLICATE CHANGES HERE AT THE ADONIS.CONFIG.TS FILE INSIDE THE ./FUNCTIONS/SRC/CONFIG/

import { AdonisConfig } from "../@types/index";
import coreConfig from "./core.config";

export const adonisConfig: AdonisConfig = {
  path: {
    rootFolder: coreConfig.ADONIS_ROOT_FOLDER,
    gallery: coreConfig.ADONIS_FULL_IMAGE_FOLDER,
    galleryThumbnail: coreConfig.ADONIS_THUMBNAIL_IMAGE_FOLDER,
    galleryThumbnailBlur: coreConfig.ADONIS_THUMBNAIL_BLUR_IMAGE_FOLDER,
  },
  createBlur: true,
  storageBucketPath: coreConfig.FIREBASE_STORAGE_BUCKET,
  baseCloudURL: coreConfig.FIREBASE_STORAGE_BASE_URL,
};

// DONT FORGET TO REPLICATE CHANGES HERE AT THE ADONIS.CONFIG.TS FILE INSIDE THE ./FUNCTIONS/SRC/CONFIG/

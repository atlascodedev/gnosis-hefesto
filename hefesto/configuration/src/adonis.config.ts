import {AdonisConfig, AdonisImage, AdonisPath} from '@hefesto/types'


  export const adonisImagePath: AdonisPath = {
    rootFolder: "adonis",
    gallery: "gallery",
    galleryThumbnail: "gallery_thumbnail",
    galleryThumbnailBlur: "gallery_thumbnail_blur",
  };
  
  export const adonisConfig: AdonisConfig = {
    path: adonisImagePath,
    createBlur: true,
    storageBucketPath: "portalbens-nextjs-hefesto.appspot.com",
    baseCloudURL: "https://firebasestorage.googleapis.com/v0/b/",
  };
  
  // DONT FORGET TO REPLICATE CHANGES HERE AT THE ADONIS.CONFIG.TS FILE INSIDE THE ./FUNCTIONS/SRC/CONFIG/
  
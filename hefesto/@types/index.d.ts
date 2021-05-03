export interface AdonisPath {
  rootFolder: string;
  gallery: string;
  galleryThumbnail: string;
  galleryThumbnailBlur: string;
}

export type AdonisOrderedTriple = {
  gallery: string;
  gallery_thumbnail: string;
  gallery_thumbnail_blur: string;
};

export interface AdonisImage extends AdonisOrderedTriple {
  fileName: string;
  uuid: string;
}

export interface AdonisConfig {
  path: AdonisPath;
  createBlur: boolean;
  storageBucketPath: string;
  baseCloudURL: string;
}

export type SeverityLevel = "success" | "error" | "warning" | "info";
export type BrandingConfig = {
  companyName: string | null;
  companyWebsite: string | null;
  logoUrl: string | null;
};

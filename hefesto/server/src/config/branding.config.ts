import coreConfig from "./core.config";

export type BrandingConfig = {
  companyName: string | null;
  companyWebsite: string | null;
  logoUrl: string | null;
};

export const brandingConfig: BrandingConfig = {
  companyName: coreConfig.companyName,
  companyWebsite: coreConfig.companyWebsite,
  logoUrl: coreConfig.logoUrl,
};

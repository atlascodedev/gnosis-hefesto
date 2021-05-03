import { AdonisConfig, adonisConfig } from "./adonis.config";
import { BrandingConfig, brandingConfig } from "./branding.config";
import { collections } from "./collections.config";
import { DataCreationItem } from "@hefesto/types";

export interface AppConfig {
  branding: BrandingConfig;
  collections: Array<Partial<DataCreationItem>>;
}

export const globalConfig: AppConfig = {
  branding: brandingConfig,
  collections: collections,
};

export default globalConfig;

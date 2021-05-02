import { existsSync, writeFileSync } from "fs";
import { resolve } from "path";

// Initializes the development cycle, tries to foolproof the initialization process even if the user did not configure the application properly

const firebaseConfigPath: string = resolve(process.cwd(), 'hefesto', 'configuration', 'dist', 'firebase.config.js')


const verifyConfiguration = async () => {
  // verify if configuration file exists

  
};

verifyConfiguration();
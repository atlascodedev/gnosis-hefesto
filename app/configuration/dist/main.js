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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adonisImagePath = exports.adonisConfig = exports.startingPath = exports.loginRedirect = exports.dashboardPath = exports.basePath = exports.brandingConfig = exports.collections = exports.fireConfig = void 0;
exports.fireConfig = __importStar(require("./firebase.config"));
var collections_config_1 = require("./collections.config");
Object.defineProperty(exports, "collections", { enumerable: true, get: function () { return collections_config_1.collections; } });
var branding_config_1 = require("./branding.config");
Object.defineProperty(exports, "brandingConfig", { enumerable: true, get: function () { return branding_config_1.brandingConfig; } });
var routes_config_1 = require("./routes.config");
Object.defineProperty(exports, "basePath", { enumerable: true, get: function () { return routes_config_1.basePath; } });
Object.defineProperty(exports, "dashboardPath", { enumerable: true, get: function () { return routes_config_1.dashboardPath; } });
Object.defineProperty(exports, "loginRedirect", { enumerable: true, get: function () { return routes_config_1.loginRedirect; } });
Object.defineProperty(exports, "startingPath", { enumerable: true, get: function () { return routes_config_1.startingPath; } });
var adonis_config_1 = require("./adonis.config");
Object.defineProperty(exports, "adonisConfig", { enumerable: true, get: function () { return adonis_config_1.adonisConfig; } });
Object.defineProperty(exports, "adonisImagePath", { enumerable: true, get: function () { return adonis_config_1.adonisImagePath; } });

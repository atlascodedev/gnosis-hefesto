"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startingPath = exports.loginRedirect = exports.dashboardPath = exports.basePath = void 0;
var collections_config_1 = require("./collections.config");
exports.basePath = "admin";
exports.dashboardPath = "dashboard";
exports.loginRedirect = exports.basePath + "/login";
exports.startingPath = exports.basePath + "/" + exports.dashboardPath + "/" + collections_config_1.collections[0].routerPath;

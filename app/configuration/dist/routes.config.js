"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.startingPath = exports.loginRedirect = exports.dashboardPath = exports.basePath = void 0;
var collections_config_1 = require("./collections.config");
exports.basePath = "admin";
exports.dashboardPath = "dashboard";
exports.loginRedirect = exports.basePath + "/login";
exports.startingPath = exports.basePath + "/" + exports.dashboardPath + "/" + ((_a = collections_config_1.collections[0]) === null || _a === void 0 ? void 0 : _a.routerPath);

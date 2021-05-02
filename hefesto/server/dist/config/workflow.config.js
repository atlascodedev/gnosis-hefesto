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
exports.dispatchURL = exports.workflowBearerKey = exports.eventType = void 0;
const functions = __importStar(require("firebase-functions"));
const repositoryName = "portalbens-nextjs-frontend";
const repositoryOwner = "oparin10";
exports.eventType = "forge";
exports.workflowBearerKey = functions.config().workflow.github.app
    .key || "";
exports.dispatchURL = `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/dispatches`;
//# sourceMappingURL=workflow.config.js.map
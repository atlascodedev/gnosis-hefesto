"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staticBuild_1 = require("../../controllers/staticBuild");
const cors = require("cors");
const staticBuildRouter = express_1.default.Router();
staticBuildRouter.options("*", cors());
staticBuildRouter.post("/forge", cors(), staticBuild_1.staticGithubActionBuild);
exports.default = staticBuildRouter;
//# sourceMappingURL=index.js.map
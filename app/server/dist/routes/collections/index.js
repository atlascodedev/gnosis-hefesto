"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const collections_1 = require("../../controllers/collections");
const cors = require("cors");
const collectionsRouter = express_1.default.Router();
collectionsRouter.options("*", cors());
collectionsRouter.get("/entries/:collectionRef", cors(), collections_1.getEntry);
collectionsRouter.get("/entries/:collectionRef/:id", cors(), collections_1.getEntryByID);
collectionsRouter.post("/entries/:collectionRef/where", cors(), collections_1.getEntryWhere);
exports.default = collectionsRouter;
//# sourceMappingURL=index.js.map
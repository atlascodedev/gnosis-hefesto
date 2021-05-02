"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adonis_1 = require("../../controllers/adonis");
const cors = require("cors");
const adonisRouter = express_1.default.Router();
adonisRouter.options("*", cors());
adonisRouter.get("/", cors(), (req, res) => {
    return res.send("All systems go").status(200);
});
adonisRouter.post("/optimize", cors(), adonis_1.optimizeAndCreateThumbnail);
exports.default = adonisRouter;
//# sourceMappingURL=index.js.map
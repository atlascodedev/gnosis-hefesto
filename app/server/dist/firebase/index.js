"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.bucket = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// const serviceAccount = require("../../serviceAccount.json");
const admin = firebase_admin_1.default.initializeApp();
exports.bucket = admin.storage().bucket();
exports.db = admin.firestore();
if (process.env.NODE_ENV !== "production") {
    exports.db.settings({
        host: "localhost:8080",
        ssl: false,
    });
}
exports.default = admin;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticGithubActionBuild = void 0;
const axios_1 = __importDefault(require("axios"));
const workflow_config_1 = require("../../config/workflow.config");
const staticGithubActionBuild = async (req, res) => {
    let responseMessage;
    axios_1.default.post(workflow_config_1.dispatchURL, { event_type: workflow_config_1.eventType }, {
        headers: {
            Authorization: `Bearer ${workflow_config_1.workflowBearerKey}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
        },
    })
        .then((result) => {
        console.log(result.data);
        res.json({ message: responseMessage }).status(200);
    })
        .catch((error) => {
        res.json({ error: error, message: error.message }).status(500);
    });
};
exports.staticGithubActionBuild = staticGithubActionBuild;
//# sourceMappingURL=index.js.map
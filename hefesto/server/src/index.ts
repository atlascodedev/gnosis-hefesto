import * as functions from "firebase-functions";
import express from "express";
import adonisRouter from "./routes/adonis";
import collectionsRouter from "./routes/collections";
import staticBuildRouter from "./routes/staticBuild";
import formsRouter from "./routes/forms";

const app = express();

app.use("/adonis", adonisRouter);

app.use("/collections", collectionsRouter);

app.use("/build", staticBuildRouter);

app.use("/forms", formsRouter);

// /api/forms/contact
// /api/forms/course-interest
// /api/forms/newsletter-subscribe

export const api = functions.https.onRequest(app);

// admin.atlascode.dev/api/v0/

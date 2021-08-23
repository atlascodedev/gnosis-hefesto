import express, { Router } from "express";
import {
  saveContactFormToDatabase,
  saveCourseFormToDatabase,
  saveNewsletterFormToDatabase,
} from "../../controllers/forms";

const cors = require("cors");

const formsRouter: Router = express.Router();

formsRouter.options("*", cors());

formsRouter.post("/contact", cors(), saveContactFormToDatabase);
formsRouter.post("/course-interest", cors(), saveCourseFormToDatabase);
formsRouter.post("/newsletter-subscribe", saveNewsletterFormToDatabase);

export default formsRouter;

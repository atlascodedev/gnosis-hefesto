import { Request, Response } from "express";
import _ from "lodash";
import { db } from "../../firebase";

const ContactFormTypeKeys = ["name", "phone", "email", "message"] as const;
type ContactFormCollectionType = {
  [Key in typeof ContactFormTypeKeys[keyof typeof ContactFormTypeKeys] as string]: string;
};

const CourseFormTypeKeys = [
  "email",
  "name",
  "phone",
  "message",
  "course",
] as const;

type CourseFormCollectionType = {
  [Key in typeof CourseFormTypeKeys[keyof typeof CourseFormTypeKeys] as string]: string;
};

const areArraysEqual = (arr1: string[], arr2: string[]) => {
  const sortedArray1 = _.sortBy(arr1);
  const sortedArray2 = _.sortBy(arr2);

  return _.isEqual(sortedArray1, sortedArray2);
};

export const saveContactFormToDatabase = async (
  req: Request<{}, {}, ContactFormCollectionType>,
  res: Response
) => {
  if (
    !req.body ||
    !areArraysEqual(
      Object.keys(req.body),
      ContactFormTypeKeys as unknown as string[]
    )
  ) {
    return res.status(400).json({
      error: `Invalid format, request is missing: ${_.sortBy(
        ContactFormTypeKeys
      ).join(",")} ---- Received ${_.sortBy(Object.keys(req.body)).join(",")}`,
    });
  } else {
    try {
      await db
        .collection("mensagens")
        .add({ ...req.body, date: new Date(Date.now()).toJSON() });

      return res.status(200).json({ message: "Message saved successfully" });
    } catch (error) {
      return res.status(500).json({ error: (error as any).message });
    }
  }
};

export const saveCourseFormToDatabase = async (
  req: Request<{}, {}, CourseFormCollectionType>,
  res: Response
) => {
  if (
    !req.body ||
    !areArraysEqual(
      Object.keys(req.body),
      CourseFormTypeKeys as unknown as string[]
    )
  ) {
    return res.status(400).json({
      error: `Invalid format, request is missing the following keys: ${Object.keys(
        CourseFormTypeKeys
      ).join(",")} ---- Received following keys: ${Object.keys(req.body).join(
        ","
      )}`,
    });
  } else {
    try {
      await db
        .collection("manifestacaoInteresse")
        .add({ ...req.body, date: new Date(Date.now()).toJSON() });

      return res.status(200).json({
        message: "Course interest manifestation was successfully saved",
      });
    } catch (error) {
      return res.status(500).json({ error: (error as any).message });
    }
  }
};

export const saveNewsletterFormToDatabase = async (
  req: Request<{}, {}, { email: string }>,
  res: Response
) => {
  if (!req.body || !req.body.email) {
    return res.status(400).json({
      error: "Invalid format, request is missing the following keys: email",
    });
  } else {
    try {
      await db
        .collection("newsletter")
        .add({ ...req.body, date: new Date(Date.now()).toJSON() });

      return res
        .status(200)
        .json({ message: "Newsletter registration was saved succesfully" });
    } catch (error) {
      return res.status(500).json({ error: (error as any).message });
    }
  }
};

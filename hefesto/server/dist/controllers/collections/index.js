"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntryWhere = exports.getEntryByID = exports.getEntry = void 0;
const firebase_1 = require("../../firebase/");
const getEntry = async (req, res) => {
    const collectionRef = req.params.collectionRef;
    firebase_1.db.collection("collections")
        .doc(collectionRef)
        .collection("entries")
        .get()
        .then((collectionSnapshot) => {
        ("");
        let dataArrayInternal = [];
        collectionSnapshot.forEach((collectionData) => {
            dataArrayInternal.push(collectionData.data());
        });
        return dataArrayInternal;
    })
        .then((dataArray) => {
        return res.json(dataArray).status(200);
    })
        .catch((error) => {
        return res.status(400).json({ error: error, message: error.message });
    });
};
exports.getEntry = getEntry;
const getEntryByID = async (req, res) => {
    const collectionRef = req.params.collectionRef;
    const entryUUID = req.params.id;
    firebase_1.db.collection("collections")
        .doc(collectionRef)
        .collection("entries")
        .where("uuid", "==", entryUUID)
        .get()
        .then((entrySnapshot) => {
        let entryDataInternal;
        entrySnapshot.forEach((entryData) => {
            entryDataInternal = entryData.data();
        });
        return res.json(entryDataInternal).status(200);
    })
        .catch((error) => {
        return res.status(400).json({ error: error, message: error.message });
    });
};
exports.getEntryByID = getEntryByID;
const getEntryWhere = async (req, res) => {
    const collectionRef = req.params.collectionRef;
    if (!req.body.key || !req.body.value) {
        return res.status(400).json({
            message: "Invalid request format. You must provide a key and a value",
        });
    }
    firebase_1.db.collection("collections")
        .doc(collectionRef)
        .collection("entries")
        .where(req.body.key, "==", req.body.value)
        .get()
        .then((entrySnapshopt) => {
        let entryDataInternal;
        entrySnapshopt.forEach((entryRef) => {
            entryDataInternal = entryRef.data();
        });
        return res.json(entryDataInternal).status(200);
    })
        .catch((error) => {
        return res.status(500).json({ error: error, message: error.message });
    });
};
exports.getEntryWhere = getEntryWhere;
//# sourceMappingURL=index.js.map
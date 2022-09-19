import express from "express";
const router = express.Router();
import bookModel from "../models/book.js";

router.get("/", async (req, res) => {
    /**
        * I am using a try-catch block to handle the error
        * if there is any error in the code
        * it will be handled by the catch block
        * and the error will be returned via the response
        * and the user will be notified
        * 
        * And I will use the try-catch block everywhere in the code
        * where there is a possibility of error because it is a good practice
        * I don't want to crash the whole application if there is an error
        * I want to handle the error and return the user a response
        */

    try {
        const books = await bookModel.find();
        res.json(books);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        res.json(book);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post("/", async (req, res) => {
    try {
        const result = await bookModel.create(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const result = await bookModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const result = await bookModel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.json({ message: err });
    }
})

export default router;
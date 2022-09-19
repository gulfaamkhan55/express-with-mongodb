import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: { type: String, required: true,},
    author: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number },
});

// "Book" will be the collection's name.
const bookModel = mongoose.model("Book", schema);

// I am exporting it cause I have to use it in routes
export default bookModel;
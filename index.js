import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose"
import bookRouter from "./routes/book.js";

const app = express();
app.use(bodyparser.json());
app.use(cors());

// Below code is connecting our Express App to MongoDB 
const connection = mongoose.connection
connection.once("connected", () => console.log("Database Connected ~"))
connection.on("error", error => console.log("Database Error: ", error))
console.log('check 1');
mongoose.connect("mongodb+srv://gulfaam:uESalASaKXrshwOE@cluster0.wipa4my.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

console.log('check 2');
/**
 * 1. First, we created a connection variable and assigned it to the mongoose.connection
 * 
 * 2. connection.once is a function that will run once the connection is established
 * and will print out the message "Database Connected"
 * 
 * 3. connection.on is a function that will run every time there is an error
 * and will print out the message "Database Error: " and the error
 * 
 * 4. mongoose.connect is a function that will connect to the database
 * and will use the connection string "mongodb://localhost:27017/my_first_data_base"
 * We are using localhost because we are running the database locally
 * localhost:27017 is the port number
 * my_first_data_base is the name of the database
 */

app.use("/book", bookRouter);

app.listen(9999)

console.log('Listining 9999 port');
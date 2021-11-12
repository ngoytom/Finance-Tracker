const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true,
        required: [true, "Please add some text"]
    },
    category: {
        type: String,
        trim: true,
        required: [true, "Please add a category"]
    },
    amount:{
        type: Number,
        required: [true, "Please add a number"]
    },
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
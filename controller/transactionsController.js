const Transaction = require("../models/Transactions");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  public
exports.getTransactions = async(req, res, next) => {
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            error: "Server Error"
        })
    }
}

// @desc    Add transactions
// @route   POST /api/v1/transactions
// @access  public
exports.addTransactions = async(req, res, next) => {
    try{
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            sucesss: true,
            data: transaction
        });
    }catch (err) {
        if (err.name === "Validation Error"){
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                sucess: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                sucess: false,
                error: "Server Error"
            })
        }
    }
}

// @desc    Delete transactions
// @route   Delete /api/v1/transactions/:id
// @access  public
exports.deleteTransactions = async(req, res, next) => {
    try{
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: "No Transaction Found"
            })
        }
        await transaction.remove();
        return res.status(200).json({
            sucess: true,
            data: {}
        });
    } catch(err){
        return res.status(500).json({
            sucess: false,
            error: "Server Error"
        })
    }
}
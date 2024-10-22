const express = require('express');
const { addTransaction, getTransactions, getTransactionById, updateTransaction, deleteTransaction, getSummary } = require('../controllers/transactionController');
const validateTransaction = require('../middlewares/validateTransaction');

const router = express.Router();

router.post('/transactions', validateTransaction, addTransaction);
router.get('/transactions', getTransactions);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', validateTransaction, updateTransaction);
router.delete('/transactions/:id', deleteTransaction);
router.get('/summary', getSummary);

module.exports = router;

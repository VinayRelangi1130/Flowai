const { body, validationResult } = require('express-validator');

const validateTransaction = [
  body('type').isIn(['income', 'expense']).withMessage('Invalid type'),
  body('category').notEmpty().withMessage('Category is required'),
  body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than zero'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateTransaction;

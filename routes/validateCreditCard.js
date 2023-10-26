const express = require('express');
// import express, { Request, Response } from 'express';
router = express.Router(),

router.get('/api', function (req:express.Request, res:express.Response) {
    res.send('hello');
})

// router.post('/api/validate-credit-card', (req: Request, res: Response) => {
//   const { creditCardNumber } = req.body;
//
//   // Implement the Luhn checksum algorithm for credit card validation here
//   // Validate the credit card number and send a response
//   if (!creditCardNumber) {
//     res.status(400).json({ error: 'Credit card number is required' });
//   } else {
//     const isValid = validateCreditCard(creditCardNumber);
//     res.json({ result: isValid });
//   }
// });

module.exports = router

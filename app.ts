const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {validateCreditCard} = require('./controllers/creditCard')

require('dotenv').config()
const app = express();
app.use(cors());

const port = process.env.PORT || 3001


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

app.post('/api/validate-credit-card', (req,res) => {
  const { creditCardNumber } = req.body;
  if (!creditCardNumber) {
    res.status(400).json({ error: 'credit card number is required' });
  } else {
    const isValid = validateCreditCard(creditCardNumber);
    res.json({ result: isValid });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app

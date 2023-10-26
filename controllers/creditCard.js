exports.validateCreditCard = (cardNumber) => {
  const digits = cardNumber.replace(/\D/g, '');

  if (!digits || !/^\d+$/.test(digits)) {
    return false;
  }

  let sum = 0;
  let double = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
}



//  exports.hello = (req, res) => {
//   res.send('hello whirl')
// };

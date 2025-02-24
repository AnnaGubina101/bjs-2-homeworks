"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (Math.pow(b, 2) - (4 * a * c));

  if(discriminant < 0) {
    return;
  }
   if (discriminant == 0) {
    let x = (- b / 2 * a);

    arr.push(x);

  } else if (discriminant > 0) {
    let x1 = ((- b + Math.sqrt(discriminant)) / (2 * a));
    let x2 = ((- b - Math.sqrt(discriminant)) / (2 * a));

    arr.push(x1, x2);
  }

  return arr;
  console.log(arr);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  return +totalPayment.toFixed(2);
}
function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(`${city}, ${state} ${zip}`);
}

function addNumber(num1, num2) {
  console.log(num1 + num2);
}

function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;

  if (changeDue > 0) {
    console.log(`Change due ${changeDue}`);
  } else if (changeDue < 0) {
    console.log(`You still owe ${Math.abs(changeDue)}`);
  }
}

displayMailingLabel("Mike", "123 drive", "Cinci", "OH", 45102);
displayMailingLabel("Bill", "124 drive", "Cinci", "OH", 45103);

addNumber(1, 2);
addNumber(3, 4);

displayReceipt(300, 100);
displayReceipt(100, 100);
displayReceipt(100, 300);

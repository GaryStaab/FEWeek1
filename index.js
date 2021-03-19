// Initialize the values
let itemPrice = 2.53;
let amountOfMoneyInWallet = 50.00;
let numberOfFriends = 20;
let ageInYears = 42;
let firstName = "Bernard";
let lastName = "Fauch";
let middleInitial = "X";
// Lets add an object
let denominations = {
    twentyDollarBill: 20,
    tenDollarBill: 10,
    fiveDollarBill: 5,
    oneDollarBill: 1,
    quarter: .25,
    dime: .10,
    nickel: .05,
    pennie: .01
}
// Do the calculations
moneyLeft = amountOfMoneyInWallet - itemPrice;
numberOfFriendsPerYear = numberOfFriends / ageInYears;
fullName = firstName + " " + middleInitial + " " + lastName;
// Display the values
console.log("----- Initial Values -----------------------");
console.log("               Item price - " + itemPrice);
console.log("Amount of Money in Wallet - " + amountOfMoneyInWallet);
console.log("        Number of Friends - " + numberOfFriends);
console.log("             Age in Years - " + ageInYears);
console.log("               First Name - " + firstName);
console.log("                Last Name - " + lastName);
console.log("           Middle Initial - " + middleInitial);
console.log("----- Calculated Values --------------------");
console.log("Money left after purchase - " + moneyLeft);
console.log("  Number of Friend / Year - " + numberOfFriendsPerYear);
console.log("                Full Name - " + fullName);
// Let's try and calculate change using modulo and an object we saw in class - (had to add toFixed() to make the rounding work)
// array and loop would work better but we haven't learned that yet
console.log("----- Calculated Change using modulo and an object --------------------");
remainingOwed = moneyLeft;
// calculate 20s back
denomQty = (remainingOwed - (remainingOwed % denominations.twentyDollarBill)) / denominations.twentyDollarBill;
console.log("Twenties in change: " + denomQty);
remainingOwed -= (denomQty * denominations.twentyDollarBill);
remainingOwed = remainingOwed.toFixed(2);
// calculate 10s back
denomQty = (remainingOwed - (remainingOwed % denominations.tenDollarBill)) / denominations.tenDollarBill;
console.log("    Tens in change: " + denomQty);
remainingOwed -= (denomQty * denominations.tenDollarBill);
remainingOwed = remainingOwed.toFixed(2);
// calculate 5s back
denomQty = (remainingOwed - (remainingOwed % denominations.fiveDollarBill)) / denominations.fiveDollarBill;
console.log("   Fives in change: " + denomQty);
remainingOwed -= (denomQty * denominations.fiveDollarBill);
remainingOwed = remainingOwed.toFixed(2);
// calculate 1s back
denomQty = (remainingOwed - (remainingOwed % denominations.oneDollarBill)) / denominations.oneDollarBill;
console.log("    Ones in change: " + denomQty);
remainingOwed -= (denomQty * denominations.oneDollarBill);
remainingOwed = remainingOwed.toFixed(2);
// calculate quarters back
denomQty = (remainingOwed - (remainingOwed % denominations.quarter)) / denominations.quarter;
console.log("Quarters in change: " + denomQty);
remainingOwed -= (denomQty * denominations.quarter);
remainingOwed = remainingOwed.toFixed(2);
// calculate dimes back
denomQty = (remainingOwed - (remainingOwed % denominations.dime)) / denominations.dime;
console.log("   Dimes in change: " + denomQty);
remainingOwed -= (denomQty * denominations.dime);
remainingOwed = remainingOwed.toFixed(2);
// calculate nickels back
denomQty = (remainingOwed - (remainingOwed % denominations.nickel)) / denominations.nickel;
console.log(" Nickels in change: " + denomQty);
remainingOwed -= (denomQty * denominations.nickel);
remainingOwed = remainingOwed.toFixed(2);
// calculate pennies back
denomQty = (remainingOwed - (remainingOwed % denominations.pennie)) / denominations.pennie;
console.log(" Pennies in change: " + denomQty);
remainingOwed -= (denomQty * denominations.pennie);
remainingOwed = remainingOwed.toFixed(2);
console.log("        Remainder : " + remainingOwed);

var month = "March";
showMessage(month, "'s winner number is ", 23);

function showMessage(m, string, num){
    console.log(m + string + num);
}

var merchTot;

function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
    orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
    }
    else {
    orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
}

merchTot = 79.99;
var totalToCharge = calcTot(merchTot);
console.log(totalToCharge);

// var orderTot = merchTot + calcTax(merchTot);

// var tot = calc(merchTot, calcTax(merchTot));

// function calcTot(price) {
//     return price + calcShip(price);}

// begin using a new variable in the body of a function without
// explicitly declaring it in the function with the keyword var, it is global—even though you
// haven't declared it anywhere in the main code.

// global variable is not reflected inside the laocal variable.
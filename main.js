// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let opc;
let dataB = [400, 540, 120, 9, 550, 0, 0];
do{
    opc = input("Write action (buy, fill, take, remaining, time, exit)\n");
    switch(opc) {
        case 'buy':{
            let purchase = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
            let tim = input("\nSelect the temperature of your coffee.  1 - Hot, 2 - Cold\n");

            switch (purchase) {
                case '1':
                    if ((dataB[0] - 250) < 0) {
                        console.log("\nSorry, not enough water!\n");
                    } else if ((dataB[2] - 16) < 0) {
                        console.log("\nSorry, not enough grams of coffee beans!\n");
                    } else if ((dataB[3] - 1) < 0) {
                        console.log("\nSorry, not enough disposable coffee cups!\n");
                    } else {
                        console.log("\nI have enough resources, making you a coffee!")
                        dataB[0] = dataB[0] - 250;
                        dataB[2] = dataB[2] - 16;
                        dataB[3] = dataB[3] - 1;
                        dataB[4] = dataB[4] + 4;
                        if (tim === '1') {
                            console.log("Please wait a moment until be ready :)\n");
                            console.log(`Here it is! Please be careful not to get burned.\nAlso remember that by waiting you have the option to personalize your disposable with your name.\nEnjoy it and Have a nice day. :)\n`);
                        } else {
                            console.log(`\nPlease take your coffee, be ware with the ice-cubes.\nAlso remember that you get a free straw for your purchase.\nHave a nice day! :)\n`)
                        }
                    }
                    break;
                case '2':
                    if ((dataB[0] - 350) < 0) {
                        console.log("\nSorry, not enough water!\n");
                    } else if ((dataB[1] - 75) < 0) {
                        console.log("\nSorry, not enough milk!\n");
                    } else if ((dataB[2] - 20) < 0) {
                        console.log("\nSorry, not enough grams of coffee beans!\n");
                    } else if ((dataB[3] - 1) < 0) {
                        console.log("\nSorry, not enough disposable coffee cups!\n");
                    } else {
                        console.log("\nI have enough resources, making you a coffee!")
                        dataB[0] = dataB[0] - 350;
                        dataB[1] = dataB[1] - 75;
                        dataB[2] = dataB[2] - 20;
                        dataB[3] = dataB[3] - 1;
                        dataB[4] = dataB[4] + 7;
                        if (tim === '1') {
                            console.log("Please wait a moment until be ready :)\n");
                            console.log(`Here it is! Please be careful not to get burned.\nAlso remember that by waiting you have the option to personalize your disposable with your name.\nEnjoy it and Have a nice day. :)\n`);
                        } else {
                            console.log(`\nPlease take your coffee, be ware with the ice-cubes.\nAlso remember that you get a free straw for your purchase.\nHave a nice day! :)\n`)
                        }
                    }
                    break;
                case '3':
                    if ((dataB[0] - 200) < 0) {
                        console.log("\nSorry, not enough water!\n");
                    } else if ((dataB[1] - 100) < 0) {
                        console.log("\nSorry, not enough milk!\n");
                    } else if ((dataB[2] - 12) < 0) {
                        console.log("\nSorry, not enough grams of coffee beans!\n");
                    } else if ((dataB[3] - 1) < 0) {
                        console.log("\nSorry, not enough disposable coffee cups!\n");
                    } else {
                        console.log("\nI have enough resources, making you a coffee!")
                        dataB[0] = dataB[0] - 200;
                        dataB[1] = dataB[1] - 100;
                        dataB[2] = dataB[2] - 12;
                        dataB[3] = dataB[3] - 1;
                        dataB[4] = dataB[4] + 6;
                        if (tim === '1') {
                            console.log("Please wait a moment until be ready :)\n");
                            console.log(`Here it is! Please be careful not to get burned.\nAlso remember that by waiting you have the option to personalize your disposable with your name.\nEnjoy it and Have a nice day. :)\n`);
                        } else {
                            console.log(`\nPlease take your coffee, be ware with the ice-cubes.\nAlso remember that you get a free straw for your purchase.\nHave a nice day! :)\n`)
                        }
                    }
                    break;
                case 'back':
                    break;
                }
            break;
            }
        case 'remaining':{
            console.log(`\nThe coffee machine has:
${dataB[0]} ml of water
${dataB[1]} ml of milk
${dataB[2]} g of coffee beans
${dataB[3]} disposable cups
$${dataB[4]} of money\n`);
            break;
        }
        case 'take':{
            console.log(`I gave you $${dataB[4]}\n`);
            dataB[4] = 0;
            break;
        }
        case 'fill': {
            console.log(`\nThe coffee machine has:
${dataB[0] = (dataB[0] + Number(input("\nWrite how many ml of water you want to add:")))} ml of water
${dataB[1] = (dataB[1] + Number(input("\nWrite how many ml of milk you want to add:")))} ml of milk
${dataB[2] = (dataB[2] + Number(input("\nWrite how many grams of coffee beans you want to add:")))} g of coffee beans
${dataB[3] = (dataB[3] + Number(input("\nWrite how many disposable coffee cups you want to add:")))} disposable cups
$${dataB[4]} of money\n`);
            break;
        }
        case 'time':{
            console.log(`\n* 24-hour format *\nRemember that time flies :)\nCurrent time set in the system: ${dataB[5]}:${dataB[6]} h`);
            let tmp = input("\nWrite action (change, out)\n");
            switch(tmp) {
                case 'change':{
                    dataB[5] = Number(input("\nHour > "));
                    dataB[6] = Number(input("Minute > "));
                    console.log(`\nTime has been set up: ${dataB[5]}:${dataB[6]}\n`);
                    break;
                }
                case 'out':{
                    break;
                }
                default:
                    break;
            }
            break;
        }
        default:
            console.log("\nWrong action, try again :)\n");
    }
    dataB[6] = dataB[6] + 1;
}while(opc !== "exit");
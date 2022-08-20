const readlineSync = require('readline-sync');
let numleng = readlineSync.question('Введите количество цифр в числе (от 3 до 6) ');
//загадываем число
let invnum = String(Math.floor(Math.random() * 9) + 1);
let i = 0;
let num;
const str = "3456";
let bul = true;
while (bul) {
    if (!~str.indexOf(String(numleng))) {
        numleng = readlineSync.question('Введите одно из чисел: 3, 4, 5, 6:  ');
    } else {
        while (i < numleng - 1) {

            num = String(Math.floor(Math.random() * 9));
            if (~invnum.indexOf(num)) {
                num = String(Math.floor(Math.random() * 9));
            } else {
                invnum = invnum + num;
                i++
            }

        };

        let j = 0;
        while (j < 3) {

            let enternum = readlineSync.question("Введите ваше чило: ");
            let consNum = "";
            let noConsNum = "";

            if (enternum === invnum) {
                console.log("Вы выиграли!");
                break;
            } else {
                let count1 = 0; //число совпадений
                let count2 = 0; //число не на своем месте

                for (let i = 0; i < numleng; i++) {;
                    if (~invnum.indexOf(enternum[i])) {
                        num = invnum.indexOf(enternum[i]);
                        if (num == i) {
                            consNum = consNum + enternum[i];
                            count1++
                            if (consNum.length > 1) {
                                consNum = consNum.slice(0, consNum.length - 1) + " и " + consNum.slice(consNum.length - 1)
                            }
                        } else {
                            noConsNum = noConsNum + enternum[i];
                            count2++
                            if (noConsNum.length > 1) {
                                noConsNum = noConsNum.slice(0, noConsNum.length - 1) + " и " + noConsNum.slice(noConsNum.length - 1)
                            }
                        }
                    }
                };
                if (consNum.length != 0) {
                    consNum = "(" + consNum + ")"
                }
                if (noConsNum.length != 0) {
                    noConsNum = "(" + noConsNum + ")"
                }
                if (count1 == 0 && count2 == 0) {
                    console.log("Совпадений нет")
                } else {
                    console.log("Совпавших цифр не на своих местах - ", count2, noConsNum, "Цифр на своих местах - ", count1, consNum, );
                };
                if (j == 2) {
                    console.log("Вы проиграли. Загаданное число это - ", invnum)
                    break;
                } else { j++ }


            }

        };
        bul = false;
    }
}
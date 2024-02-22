// import { readFileSync } from "fs";
// const fileReader = function (filepath) {
//   return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
// };
// const scrabbleWords = fileReader("./sowpods.txt");
function addString(strA, strB) {
    return strA + " " + strB;
}
console.log(addString("hell", "world"));
console.log("testing testing");
function bestFriend(txt, a, b) {
    var txtArr = txt.split("");
    var aCount = 0;
    var afterCount = 0;
    for (var i = 0; i < txtArr.length; i++) {
        if (txtArr[i] === a) {
            aCount += 1;
        }
        if (txtArr[i] === a && txtArr[i + 1] === b) {
            afterCount += 1;
        }
    }
    console.log(aCount, afterCount);
    if (aCount === afterCount) {
        return true;
    }
    else {
        return false;
    }
}
function multipleOfIndex(array) {
    var resultArry = [];
    for (var i = 1; i < array.length; i++) {
        if (array[i] % i === 0) {
            resultArry.push(array[i]);
        }
    }
    return resultArry;
}
var wordsList = ["hey", "hello", "world", "hi", "helloWordLongVersion", "ververyveryveryveryveryveryLongString", "eeeeeeeeeeeteyetyetyetyeteytyeteyteyteyteyetyetyeteyteyeteyteyeteyteyte"];
//how many words in this list have more than three letters
//homework --> figure out how to solve this with reduce and use the documentation 
function moreThanThree(arr) {
    var result = arr.reduce(function (acc, word) {
        if (word.length > 3) {
            acc.push(word);
        }
        return acc;
    }, []);
    return result.length;
}
console.log(moreThanThree(wordsList));
//only E's for vowels and at least 15 letters long
function onlyEs15(arr) {
    var wordsOver14 = [];
    var result = [];
    var wordsWithAUIO = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var word = arr_1[_i];
        if (word.length > 14) {
            wordsOver14.push(word);
        }
    }
    for (var _a = 0, wordsOver14_1 = wordsOver14; _a < wordsOver14_1.length; _a++) {
        var word = wordsOver14_1[_a];
        if (word.includes("a") || word.includes("u") || word.includes("o") || word.includes("i")) {
            wordsWithAUIO.push(word);
        }
    }
    for (var _b = 0, wordsOver14_2 = wordsOver14; _b < wordsOver14_2.length; _b++) {
        var word = wordsOver14_2[_b];
        if (!wordsWithAUIO.includes(word)) {
            result.push(word);
        }
    }
    return result;
}
console.log(onlyEs15(wordsList));

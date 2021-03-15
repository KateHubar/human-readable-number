module.exports = function toReadable(number) {
    const firstOrderNums = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    if (number < 20) return firstOrderNums[number];
    const numStr = number.toString();
    const secondOrderNums = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    if (numStr.length === 2) {
        if (numStr[1] == 0) return secondOrderNums[numStr[0]];

        return `${secondOrderNums[numStr[0]]} ${firstOrderNums[numStr[1]]}`;
    }

    return "";
};

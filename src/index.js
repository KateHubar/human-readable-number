module.exports = function toReadable(number) {
    if (number > 999) return "overflow";
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

    const numStr = number.toString();
    function getSecondOrderNumberName(num) {
        if (num < 20) return firstOrderNums[num];
        if (num[1] == 0) return secondOrderNums[num[0]];
        return `${secondOrderNums[num[0]]} ${firstOrderNums[num[1]]}`;
    }

    if (numStr.length <= 2) {
        return getSecondOrderNumberName(numStr);
    }

    return `${firstOrderNums[numStr[0]]} hundred ${
        numStr[1] == 0 && numStr[2] == 0
            ? ""
            : getSecondOrderNumberName((+numStr.substring(1, 3)).toString())
    }`;
};

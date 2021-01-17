module.exports = function toReadable (number) {
    const numberTo19 = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const number19to99 = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    if (number === 0) {
      return 'zero';
    }
    let strNumber = number + '';
    if (number < 20) {
      return numberTo19[number];
    } else if (number > 99 && strNumber[1] == 0 && strNumber[2] == 0) {
        return numberTo19[strNumber[0]] + ' hundred';
    } else if (number > 99 && strNumber[1] == 1 && strNumber[2] == 0) {
        return numberTo19[strNumber[0]] + ' hundred ' + numberTo19[10];
    } else if (number > 99 && strNumber[1] != 0 && strNumber[2] == 0) {
        return numberTo19[strNumber[0]] + ' hundred ' + number19to99[strNumber[1]];
    }  else if (number > 99 && strNumber[1] == 0 && strNumber[2] != 0) {
        return numberTo19[strNumber[0]] + ' hundred ' + numberTo19[strNumber[2]];
    } else if (number > 99 && (strNumber[1] == 0 || strNumber[1] == 1 ) && strNumber[2] != 0) {
        return numberTo19[strNumber[0]] + ' hundred ' + numberTo19[strNumber[1] + strNumber[2]];
    } else if (number > 99 && strNumber[1] != 0 && strNumber[1] != 1 && strNumber[2] != 0) {
        return numberTo19[strNumber[0]] + ' hundred ' + number19to99[strNumber[1]] + ' ' + numberTo19[strNumber[2]];
    }  else if (number > 19 && strNumber[1] == 0) {
        return number19to99[strNumber[0]];
    } else if (number > 19 && strNumber[1] != 0) {
        return number19to99[strNumber[0]] + ' ' + numberTo19[strNumber[1]];
    }
}

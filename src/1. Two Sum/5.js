function longestPalindrome(s) {
    const strArray = s.split('') // 'b', 'a', 'b', 'a', 'd']
    const ret = []
    for (let i = 0; i <= strArray.length; i++) {
        for (let j = i; j < strArray.length; j++) {
            if (ret.indexOf(strArray[i]) < 0 && strArray[i]) {
                ret.push(strArray[i])
            }
            if (strArray[i] === strArray[j] && i !== j) {
                ret.push([...strArray].splice(i, j - i + 1).join())
            }
        }
    }
    return ret.filter(i => {
        return i.split('').reverse().join() === i
    })
        .reduce((result, current) => {
            if (!result) {
                result = current

            }
            else if (current.length > result.length) {
                result = current

            }
            return result
        }, '')
};

console.log(
    longestPalindrome('babad')
);

console.log(
    longestPalindrome('cbbd')
);


console.log(
    longestPalindrome('dccdc')
);

function longestPalindrome2(s) {
    let strArr = s.split('')
    let reverseStrArr = s.split('').reverse()
    const arrToStr = (str) => {
        return str.toString().replaceAll(',', '')
    }
    if (arrToStr(strArr) === arrToStr(strArr.reverse())) return s
    const length = Math.floor(s.length / 2)
    console.log('length:', length);
    for (let i = 1; i <= length; i++) {
        console.log("arrToStr([...strArr].splice(i).reverse()) === arrToStr([...strArr].splice(i)):", arrToStr([...strArr].splice(i).reverse()) === arrToStr([...strArr].splice(i)));
        if (arrToStr([...strArr].splice(i).reverse()) === arrToStr([...strArr].splice(i))) {
            console.log(" arrToStr([...strArr].splice(i)):", arrToStr([...strArr].splice(i)));
            return arrToStr([...strArr].splice(i))
        }
        console.log("(arrToStr([...strArr].reverse().splice(i)) === arrToStr([...strArr].reverse().splice(i).reverse()):", (arrToStr([...strArr].reverse().splice(i)) === arrToStr([...strArr].reverse().splice(i).reverse())));
        if (arrToStr([...strArr].reverse().splice(i)) === arrToStr([...strArr].reverse().splice(i).reverse())) {
            console.log(" arrToStr([...strArr].splice(i)):", arrToStr([...strArr].splice(i)));
            return arrToStr([...strArr].splice(i))}
        else {
            strArr.shift()
            strArr.pop()
        }
    }

}
// console.log(
//     longestPalindrome2('babad')
// );

// console.log(
//     longestPalindrome2('cbddbc')
// );
console.log(
    longestPalindrome2('cbbd')
);


console.log(
    longestPalindrome2('dccdc')
);
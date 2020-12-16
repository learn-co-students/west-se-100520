// mean of digits
// 42 => 3

function meanie(num) {
    let counter = 0
    let total = 0
    // gives us 2 first time around
    while (num > 0) {
        let temp = num % 10
        num = Math.floor(num/10)
        total += temp
        counter += 1
    }
    return total/counter
}

console.log(meanie(666))
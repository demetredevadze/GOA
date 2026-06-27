// 3)შექმენი ფუნქცია numberType(num) რომელიც დააბრუნებს:

// "Positive"
// "Negative"
// "Zero"

// .sign()

function numberType(num) {
    return Math.sign(num) === 1 ? "Positive" : Math.sign(num) === -1 ? "Negative" : "Zero"
}

console.log(numberType(10))
console.log(numberType(-5))
console.log(numberType(0))
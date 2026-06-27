// 8)შექმენი ფუნქცია checkSign(num)

// გამოიყენე Math.sign() და დაბეჭდე:

// Positive

// ან

// Negative

// ან

// Zero

function checkSign(num) {
    let a = Math.sign(num)

    if (a === 1) {
        console.log("Positive")
    } else if (a === -1) {
        console.log("Negative")
    } else {
        console.log("Zero")
    }
}

checkSign(10)
checkSign(-5)
checkSign(0)
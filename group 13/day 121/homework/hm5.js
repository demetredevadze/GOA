// 5)შექმენი ფუნქცია:

// grade(score)

// რომელიც აბრუნებს:

// 90-100 → "A"
// 80-89 → "B"
// 70-79 → "C"
// 60-69 → "D"
// 0-59 → "F"


// switch()

function grade(score) {
    switch (true) {
        case score >= 90 && score <= 100:
            return "A"
            break
        case score >= 80:
            return "B"
            break
        case score >= 70:
            return "C"
            break
        case score >= 60:
            return "D"
            break
        default:
            return "F"
    }
}

console.log(grade(95))
console.log(grade(85))
console.log(grade(75))
console.log(grade(65))
console.log(grade(50))
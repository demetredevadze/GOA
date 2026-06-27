// 4)ბილეთის ფასი

// შექმენი ფუნქცია:

// ticketPrice(age, isStudent = false)

// წესები:

// 12 წლამდე → 5 ლარი.
// 12-დან 60 წლამდე → 15 ლარი.
// 60+ → 8 ლარი.

function ticketPrice(age, isStudent = false) {
    return age < 12 ? 5 : age > 12 && age < 60 ? 15 : 8
}

console.log(ticketPrice(10))
console.log(ticketPrice(25))
console.log(ticketPrice(65))
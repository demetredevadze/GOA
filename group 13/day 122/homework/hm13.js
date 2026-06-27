// 13)შექმენი passedExam, რომელიც ერთ ხაზში დააბრუნებს:

// "Passed" თუ ქულა 51 ან მეტია
// "Failed" სხვა შემთხვევაში

// ternary

let passedExam = (score) => score >= 51 ? "Passed" : "Failed"

console.log(passedExam(80))
console.log(passedExam(51))
console.log(passedExam(50))
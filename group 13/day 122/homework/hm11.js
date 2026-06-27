// 11)შექმენი checkCode, რომელიც ერთ ხაზში დააბრუნებს:

// "Access Granted" თუ კოდი არის "1234"
// "Access Denied" სხვა შემთხვევაში

// ternary

let checkCode = (code) => code === "1234" ? "Access Granted" : "Access Denied"

console.log(checkCode("1234"))
console.log(checkCode("0000"))
console.log(checkCode("1111"))
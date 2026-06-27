// 6)შექმენი Arrow Function --> isAdult, რომელიც მიიღებს ასაკს და დააბრუნებს:

// "Adult" თუ ასაკი 18 ან მეტია
// "Minor" სხვა შემთხვევაში

// ternary

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი

let isAdult = function(age) {
    return age >= 18 ? "Adult" : "Minor"
}

console.log(isAdult(20))
console.log(isAdult(18))
console.log(isAdult(15))
console.log(isAdult(10))
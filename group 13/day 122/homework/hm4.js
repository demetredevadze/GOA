// 4)შექმენი Function Expression --> isLuckyNumber, რომელიც დააბრუნებს true თუ რიცხვი:

// იყოფა 3-ზე
// და იყოფა 5-ზე

// სხვა შემთხვევაში დააბრუნოს false.(use ternary)

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი

let isLuckyNumber = function(number) {
    return number % 3 === 0 && number % 5 === 0 ? true : false
}

console.log(isLuckyNumber(15))
console.log(isLuckyNumber(30))
console.log(isLuckyNumber(9))
console.log(isLuckyNumber(10))
console.log(isLuckyNumber(7))
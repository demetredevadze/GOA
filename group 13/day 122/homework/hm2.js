// 2)შექმენი Function Expression --> maxNumber, რომელიც მიიღებს ოთხ რიცხვს და დააბრუნებს მათგან დიდს.

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი

let maxNumber = function(a, b, c, d) {
    return Math.max(a, b, c, d)
}

console.log(maxNumber(5, 12, 8, 3))
console.log(maxNumber(100, 45, 67, 89))
console.log(maxNumber(-5, -2, -10, -1))
console.log(maxNumber(7, 7, 7, 7))
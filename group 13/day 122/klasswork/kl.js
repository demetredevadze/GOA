// შექმენით ფუნქცია function expression ით რომელსაც გადაეცემა პარამეტრად num რიცხვი

// შენი დავალებაა რომ გაიგო ეს რიცხვი ლუწია თუ კენტია და დააბრუნო შესაბამისი სტრინგი --> "even" თუ ლუწია "odd" თუ კენტია

// გააკეთე ternary ოპერატორით

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტით

let Number = function(num) {
    return num % 2 === 0 ? "even" : "odd"
}


console.log(Number(4))
console.log(Number(7))
console.log(Number(10))
console.log(Number(15))
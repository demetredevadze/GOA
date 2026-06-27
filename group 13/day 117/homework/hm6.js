// 6)შექმენი ფუნქცია isAdult(age).

// თუ ასაკი(პარამეტი) 18 ან მეტია, დაბეჭდოს Adult, სხვა შემთხვევაში Minor.(გამოიყენე ternary)

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით

function isAdult(age) {
    age >= 18 ? console.log("Adult") : console.log("Minor")
}

isAdult(15)
isAdult(18)
isAdult(25)
isAdult(12)
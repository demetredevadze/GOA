// 1)შექმენი ფუნქცია analyzeTemperature(temp) რომელიც:

// თუ ტემპერატურა 30-ზე მეტია, დააბრუნებს "Hot".
// თუ 15-30 შუალედშია, დააბრუნებს "Normal".
// თუ 15-ზე ნაკლებია, დააბრუნებს "Cold".

// ternary

function analyzeTemperature(temp) {
    return temp > 30 ? "Hot" : temp > 15 && temp < 30 ? "Normal" : "Cold"
}

console.log(analyzeTemperature(35))
console.log(analyzeTemperature(20))
console.log(analyzeTemperature(10))
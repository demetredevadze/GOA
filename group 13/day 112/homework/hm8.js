let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"))
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"))

if (num1 > num2) {
    console.log("პირველი მეტია")
} else if (num2 > num1) {
    console.log("მეორე მეტია")
} else {
    console.log("ტოლია")
}
let a = Number(prompt("შეიყვანე ასაკი"))
let b = prompt("შეიყვანე სახელი")

if (a > 18 && b.startsWith("g")) {
    console.log("Access granted")
} else if (a < 18) {
    console.log("Too young")
} else {
    console.log("Wrong username")
}
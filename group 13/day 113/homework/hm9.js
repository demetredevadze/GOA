let a = prompt("შეიყვანე პირველი პაროლი")
let b = prompt("შეიყვანე მეორე პაროლი")

if (
    a === b &&
    a.length > 8 &&
    a !== a.toUpperCase()
) {
    console.log("Passwords match")
} else {
    console.log("Passwords do not match")
}
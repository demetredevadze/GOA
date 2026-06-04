let a = prompt("შეიყვანეთ პაროლი:")

let b = a.trim()

if (
    b.startsWith("GOA") &&
    b.length > 10 &&
    b !== b.toUpperCase()
) {
    console.log("Strong password")
} else {
    console.log("Weak password")
}
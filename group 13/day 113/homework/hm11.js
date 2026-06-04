let a = prompt("შეიყვანე username")
let b = prompt("შეიყვანე role")

if (
    a.startsWith("user") &&
    b.toLowerCase() === "admin"
) {
    console.log("Fake admin")
} else if (
    a.startsWith("admin") &&
    b.toLowerCase() === "admin"
) {
    console.log("Real admin")
} else {
    console.log("Normal user")
}
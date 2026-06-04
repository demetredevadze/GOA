let a = prompt("შეიყვანე ტექსტი")

if (a.length < 5) {
    console.log("Too short")
} else if (
    a.startsWith("java") ||
    a.length > 20
) {
    console.log("Programming text")
} else {
    console.log("Unknown text")
}
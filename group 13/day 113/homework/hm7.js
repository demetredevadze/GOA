let a = prompt("შეიყვანე ტექსტი")

if (
    a.length % 2 === 0 &&
    !a.toLowerCase().startsWith("x") &&
    a.toUpperCase() !== a
) {
    console.log("Accepted")
} else {
    console.log("Rejected")
}
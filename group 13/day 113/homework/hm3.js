let a = prompt("შეიყვანე ტექსტი")

if (
    typeof a === "string" &&
    a.length >= 5 &&
    a.startsWith("hello")
) {
    console.log("Valid text")
} else {
    console.log("Invalid text")
}
let a = prompt("შეიყვანე პირველი სიტყვა")
let b = prompt("შეიყვანე მეორე სიტყვა")

if (
    a.length + b.length > 12 &&
    a.toUpperCase() !== b.toUpperCase()
) {
    console.log("Different long words")
} else {
    console.log("Failed")
}
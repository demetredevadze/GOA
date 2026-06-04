let a = prompt("შეიყვანე ქვეყანა")

if (
    a.toUpperCase() === "GEORGIA" ||
    a.toLowerCase() === "sakartvelo"
) {
    console.log("Correct country")
} else {
    console.log("Unknown country")
}
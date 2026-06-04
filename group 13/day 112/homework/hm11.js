let text = prompt("შეიყვანე ტექსტი:")

if (text === text.toLowerCase()) {
    console.log("lowercase ტექსტი")
} else if (text === text.toUpperCase()) {
    console.log("uppercase ტექსტი")
} else {
    console.log("შერეული ტექსტი")
}
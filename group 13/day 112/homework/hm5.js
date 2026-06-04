let text = prompt("შეიყვანე ტექსტი:")

if (text.length > 10) {
    console.log("გრძელი ტექსტი")
} else if (text.length < 5) {
    console.log("მოკლე ტექსტი")
} else {
    console.log("საშუალო ტექსტი")
}
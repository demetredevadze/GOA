let name = prompt("შეიყვანე სახელი:")

if (name.trim() === "") {
    console.log("შეიყვანე სახელი")
} else {
    if (name.startsWith("A")) {
        console.log("შენი სახელი A-ზე იწყება")
    } else {
        console.log("სხვა ასოზე იწყება")
    }
}
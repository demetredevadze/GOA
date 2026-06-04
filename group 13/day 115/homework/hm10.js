// 10)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// ტექსტი იწყება "java"-თი 
// ან length მეტია 20-ზე
// დაბეჭდე "Programming text"


// თუ length ნაკლებია 5-ზე → "Too short"

// სხვა შემთხვევაში → "Unknown text"

let text = prompt("შეიყვანე ტექსტი");

if (text.startsWith("java") || text.length > 20) {
    console.log("Programming text");
} else if (text.length < 5) {
    console.log("Too short");
} else {
    console.log("Unknown text");
}
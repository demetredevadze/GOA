// 7)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// typeof არის "string"
// და ტექსტი არ არის ცარიელი
// და length 3-ის ჯერადია

// დაბეჭდე "Special string"
// სხვა შემთხვევაში → "Normal string"

let text = prompt("enter text: ")
if(typeof text === "string" && text !== "" && text.length() % 3 === 0){
    console.log("Special string")
}else{
    console.log("Special string")
}
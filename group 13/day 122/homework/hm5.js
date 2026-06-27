// 5)შექმენი Function Expression--> checkWord, რომელიც მიიღებს სიტყვას.

// თუ სიტყვა არის "javascript" დააბრუნოს:

// "Access Granted"

// სხვა შემთხვევაში:

// "Access Denied"

// # arrow=======================================

let checkWord = (word) => {
    return word === "javascript" ? "Access Granted" : "Access Denied"
}

console.log(checkWord("javascript"))
console.log(checkWord("python"))
console.log(checkWord("html"))
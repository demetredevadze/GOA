// 3)პაროლის შემოწმება

// შექმენი Function Expression --> checkPassword, რომელიც დააბრუნებს true თუ პაროლი:

// მინიმუმ 8 სიმბოლოა და მთავრდება ასო "a" ზე

// სხვა შემთხვევაში დააბრუნოს false.

let checkPassword = function(password) {
    return password.length >= 8 && password.endsWith("a")
}

console.log(checkPassword("passworda")) 
console.log(checkPassword("hello123a"))
console.log(checkPassword("test"))      
console.log(checkPassword("password")) 
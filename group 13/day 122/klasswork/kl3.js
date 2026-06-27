// function greet(name , age , sunrame){
//   return  `Hello my name is ${name} , my surname is ${surname} and age is ${age}`
// }

// console.log(greet("giorgi" , 20 , "miribiani")


// გადააკეთეთ ზემოთ მოცემული ფუნქცია ჯერ function expression შემდეგ arrow ფუნქციად

let greet = function(name , age , surname) {
  return `Hello my name is ${name}, my surname is ${surname} and my age is ${age}`
}

console.log(greet("giorgi", 20, "miribiani"))

// ------------------------------------------------------------------------------------------------------------------

let greet = (name , age , surname) => {
  return `Hello my name is ${name} , my surname is ${surname} and my age is ${age}`
}

console.log(greet("giorgi" , 20 , "miribiani"))
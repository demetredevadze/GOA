
// 5)ომხმარებელს შემოატანინე ორი მნიშვნელობა.
// თუ ორივე truthy-ა → "ორივე სწორია"
// თუ ერთ-ერთი falsy-ა → "რომელიღაც ცარიელია".


let text1 = prompt("enter text1: ")
let text2 = prompt("enter text2: ")
if(text1 && text2){
    console.log("ორივე სწორია")
}else{
    console.log("რომელიღაც ცარიელია")
}
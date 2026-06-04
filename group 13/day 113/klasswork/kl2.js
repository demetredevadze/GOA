// 2)მომხმარებელს შემოატანინე რაიმე რიცხვი

// თუ ეს რიცხვი მეტია 50 ზე ან არის ლუწი --> "more than 50 or even"

// თუ ეს რიცხვი არის 50 ზე ნაკლები და არის კენტი --> less than 50 and odd"

// სხვა შემთხვევაში --> "other number"


let num = Number(prompt("შემოიტანე რიცხვი"))

if(num > 50 || num %2 == 0){
    console.log("more than 50 or even")
}else if(num < 50 || num %2 == 1){
    console.log("less than 50 and odd")
}else{
    console.log("other number")
}
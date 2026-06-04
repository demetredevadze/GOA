// let text = prompt("enter number")

// if(text === 0){
//     return "ნული"
// }
// else if(text === 1){
//     return "ერთი"
// }
// else if(text === 2){
//     return "ორი"
// }
// else if(text === 3){
//     return "სამი"
// }
// else if(text === 4){
//     return "ოთხი"
// }
// else if(text === 5){
//     return "ხუთი"
// }
// else if(text === 6){
//     return "ექვსი"
// }
// else if(text === 7){
//     return "შვიდი"
// }
// else if(text === 8){
//     return "რვა"
// }
// else if(text === 9){
//     return "ცხრა"
// }
// else if(text === 10){
//     return "ათი"
// }

// 3. :thermometer: ტემპერატურის კონტროლერი (checkThermostat)
// აღწერა: დაწერე ფუნქცია, რომელიც არეგულირებს ოთახის კონდიციონერს მიმდინარე ტემპერატურის (temperature) და სეზონის (season - შეიძლება იყოს "winter" ან "summer") მიხედვით.

// თუ არის "winter":

// თუ ტემპერატურა 18 გრადუსზე ნაკლებია, დააბრუნე: "Turn on heating"

// სხვა შემთხვევაში, დააბრუნე: "Heating off"

// თუ არის "summer":

// თუ ტემპერატურა 25 გრადუსზე მეტია, დააბრუნე: "Turn on cooling"

// სხვა შემთხვევაში, დააბრუნე: "Cooling off"

// ნებისმიერ სხვა სეზონზე დააბრუნე: "Invalid season"

// let text = prompt("enter temperature ")

// if(text < 18 ){
//     return "Turn on heating"
// }
// else{
//     return "Heating off"
// }

// if(text >25){
//     return "Turn on cooling"
// }
// else{
//     return "Cooling off"
// }

// სტუდენტის ნიშანი (gradeCalculator)
// აღწერა: ფუნქციამ უნდა დააბრუნოს ასოითი შეფასება გამოცდის ქულის (score) მიხედვით.

// თუ ქულა 90 ან მეტია, დააბრუნე: "A"

// თუ ქულა 80-დან 89-მდეა, დააბრუნე: "B"

// თუ ქულა 70-დან 79-მდეა, დააბრუნე: "C"

// თუ ქულა 51-დან 69-მდეა, დააბრუნე: "D"

// თუ ქულა 51-ზე ნაკლებია, დააბრუნე: "F"

// let text = prompt("enter temperature ")
// if( text > 90){
//     return"A"
// }
// else if( text < 89){
//     return"B"
// }
// else if( text < 79){
//     return"C"
// }
// else if( 51 < text < 69){
//     return"D"
// }
// else if( text < 51){
//     return"F"
// }


// პაროლის ვალიდატორი (validatePassword)
// აღწერა: ფუნქციამ უნდა შეამოწმოს პაროლის უსაფრთხოება მისი სიგრძის (length) და შეიცავს თუ არა სპეც-სიმბოლოს (hasSpecialChar - true ან false) მიხედვით.

// თუ სიგრძე 8 სიმბოლოზე ნაკლებია, დააბრუნე: "Too short"

// თუ სიგრძე 8 ან მეტია:

// თუ აქვს სპეც-სიმბოლო (true), დააბრუნე: "Strong password"

// თუ არ აქვს სპეც-სიმბოლო (false), დააბრუნე: "Medium password"

let text = prompt("enter psword: ")
let text2 = prompt("enter true or fals: ")
if (text.length < 8) {
    return "Too short";
}
else if(text.length > 8){
    
}
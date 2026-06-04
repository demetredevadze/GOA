// 9)მომხმარებელს შემოატანინე 2 პაროლი.
// თუ:
// ორივე პაროლი ერთმანეთს ემთხვევა
// და პირველი პაროლის length მეტია 8-ზე
// და პაროლი uppercase-ში არ უდრის ორიგინალს

// დაბეჭდე "Passwords match"
// სხვა შემთხვევაში → "Passwords do not match

let password1 = prompt("enter password");
let password2 = prompt("enter password");

if( password1 === password2 && password1.length > 8 && password1 !== password1.toUpperCase() ){
    console.log("Passwords match")
}else{
    console.log("Passwords do not match")
}
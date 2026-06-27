// 3)მომხმარებელს შეაყვანინე პაროლი.
// თუ მისი .length არის 8 ან მეტი, გამოიტანე "ძლიერი პაროლი", სხვა შემთხვევაში "სუსტი პაროლი".

let password = prompt("enter password")

password.lenght >= 8 ? console.log("ძლიერი პაროლი") : console.log("სუსტი პაროლი")
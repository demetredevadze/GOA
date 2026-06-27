// 9)მომხმარებლის როლი
// let role = prompt("შეიყვანე როლი").trim().toLowerCase();

// თუ role არის "admin" → "სრული წვდომა"

// თუ "moderator" → "შეზღუდული წვდომა"

// დანარჩენ შემთხვევაში → "მომხმარებელი"

// (გამოიყენე nested ternary.)

let role = prompt("შეიყვანე როლი").trim().toLowerCase();

role === "admin" ? console.log("სრული წვდომა") : role === "moderator" ? console.log("შეზღუდული წვდომა") : console.log("მომხმარებელი");
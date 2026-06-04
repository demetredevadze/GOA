// 11)მომხმარებელს შემოატანინე username და role.
// თუ:
// username იწყება "user"-ით
// და role lowercase-ში უდრის "admin"

// დაბეჭდე "Fake admin"

// თუ:

// username იწყება "admin"-ით
// და role lowercase-ში უდრის "admin"

// დაბეჭდე "Real admin"

// სხვა შემთხვევაში → "Normal user"
let username = prompt("enter username");
let role = prompt("enter role");

if (
    username.startsWith("user") && role.toLowerCase() === "admin"
) {
    console.log("Fake admin");
} else if (
    username.startsWith("admin") && role.toLowerCase() === "admin"
) {
    console.log("Real admin");
} else {
    console.log("Normal user");
}
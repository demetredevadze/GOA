// 8)მომხმარებელს შემოატანინე ორი username.
// თუ:
// ორივე იწყება "go"-თი
// და ერთნაირი არ არის(!==)
// და ორივეს length მინიმუმ 6 აქვს

// დაბეჭდე "Matching users"
// სხვა შემთხვევაში → "Users failed"

let username1 = prompt("ente username");
let username2 = prompt("enter username");

if(username1 && username2 .startsWith() === "go" && username1 && username2 !==  username1 && username2 .length() === 6){
    console.log("Matching users")
}else{
    console.log("Users failed")
}

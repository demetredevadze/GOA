function checkPassword(password) {
    console.log(
        password.length < 8 ? console.log("Password is too short") : console.log("Password accepted")
    )
}

checkPassword("12345")
checkPassword("password")
checkPassword("abc")
checkPassword("mypassword123")
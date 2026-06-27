// 8)შექმენი Arrow Function -->  passwordStrength, რომელიც მიიღებს პაროლს:

// თუ პაროლის სიგრძე 8-ზე ნაკლებია და პაროლი მთავრდება ასო "ი" თი→ "Weak"
// თუ 8 ან მეტია და იწყება ასო "გ" თი → "Strong"


let passwordStrength = function(password) {
    return password.length < 8 && password.endsWith("ი") ? "Weak" : password.length >= 8 && password.startsWith("გ") ? "Strong" : "Invalid"
}

console.log(passwordStrength("გიორგი"))
console.log(passwordStrength("გეგა"))
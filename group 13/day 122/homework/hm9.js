// 9)შექმენი Arrow Function -->  startsWith რომელიც მიიღებს რაიმე სტრინგს

// თუ სტრინგი იწყება "გ" თი და მთავრდება "ო" თი და სიგრძე trim() ით მეტია 8 ზე დააბრუნე --> რთული სახელი , სხვა შემთხვევაში მარტივი სახელი


// single line arrow =======================================

let startsWith = (str) => {
    return str.trim().startsWith("გ") && str.trim().endsWith("ო") && str.trim().length > 8 ? "რთული სახელი" : "მარტივი სახელი"
}

console.log(startsWith("გიორგიო"))
console.log(startsWith("გიორგი"))
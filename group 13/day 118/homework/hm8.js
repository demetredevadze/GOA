// 8)შექმენი ფუნქცია checkNum(num = 5)

// ფუნქციამ უნდა დააბრუნოს "even" თუ რიცხვი ლუწია , "odd" თუ რიცხვი კენტია

// გამოძახე ფუნქცია არგუმენტითაც და მის გარეშეც 

function checkNum(num = 5) {
    if (num % 2 === 0) {
        return "even"
    }else{
        return "odd"
    }   
}

checkNum()
checkNum(8)
checkNum(11)
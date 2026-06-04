// 3)მომხმარებელს შემოარანინე რაიმე სახელი

// შემდეგ შეამოწმე თუ მომხმარებლის მიერ შემოტანილის ახელი იწყება "i" ასოზე დააკონსოლლოგე --> starts with letter i

// სხვა შემთხვევაში დააკონსოლლოგე --> "this name does not start with letter i" 

let name = prompt("enter name: ")

if(name.startsWith("i")){
    console.log("starts with letter i")
}
else{
    console.log("this name does not start with letter i")
}
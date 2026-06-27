// 14)შექმენი freeDelivery, რომელიც ერთ ხაზში დააბრუნებს true, თუ შეკვეთის ფასი 100₾-ზე მეტია. სხვა შემთხვევაში false

// ternary

let freeDelivery = (lari) => lari > 100 ? true : false

console.log(freeDelivery(150))
console.log(freeDelivery(100))
// 2)შექმენი ფუნქცია:

// calculateSalary(hoursWorked, hourlyRate = 20)

// რომელიც დააბრუნებს მთლიან ხელფასს.

// მაგალითად:

// calculateSalary(8) // 160
// calculateSalary(10, 30) // 300

function calculateSalary(hoursWorked, hourlyRate = 20) {
    return hoursWorked * hourlyRate
}

calculateSalary(8)
calculateSalary(10, 30)
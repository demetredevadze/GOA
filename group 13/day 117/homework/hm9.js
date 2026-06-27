function greetUser(name, time) {
    if (time === "morning") {
        console.log(`Good morning, ${name}!`)
    } else if (time === "evening") {
        console.log(`Good evening, ${name}!`)
    } else {
        console.log(`Hello, ${name}!`)
    }
}

greetUser("Nika", "morning")
greetUser("Ana", "evening")
greetUser("Gio", "afternoon")
greetUser("Luka", "night")
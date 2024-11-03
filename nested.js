const school = {
    class: [6, 7, 8, 9, 10],
    name: "Rover Polly",
    events: {
        game: "football",
        ekusheFabuary: "onusthan",
        result: {
            classSix: " A+",
            classSeven: "A",
            exam: {
                class: [6, 7, 8, 9, 10]
            }
        }
    }
}

// console.log(school)
// console.log(school.events);
// console.log(school.events.result);
console.log(school.events.result.exam.class[4]);
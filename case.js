const school = "Rover Polly High School";

// console.log(school);
// console.log(school.toUpperCase());
// console.log(school.toLowerCase());

let exam = "Chemistry";
let book = "chemiStry";

if (exam.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log("Ami eibar Pass korbo 100%");
}
else{
    console.log("Ami fail...");
}

let drinks = "  water";
let liquid = "water ";

if(drinks.trim() === liquid.trim()){
    console.log("Panir opor nam Jibob.");
}
else{
    console.log("Somudrer pani khaoya jai na.");
}
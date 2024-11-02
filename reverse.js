let sentence = "I am learning Web development.";

let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
    
}
// console.log(reverse);

let rev = "";
for(let i=0; i<sentence.length; i++){
    let letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev);

const rever = sentence.split("").reverse().join('')
console.log(rever);
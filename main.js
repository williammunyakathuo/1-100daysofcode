//datatypes

let age = 25;
let year = 20013;

console.log(age, year);

age = 30 ;
console.log(age)
//stings
//strings are words
console.log("my name is william james")
let name = "william james ";
console.log(name);

// string conacatenation
let firstName = "william james";
let secondName= "munyaka thuo";

let fullName = firstName + ' ' + secondName;
console.log('my name is ' ,firstName +' ', secondName);
console.log(fullName);

//getting characters

let firstLetter = firstName[0];

console.log(firstLetter);

//string methods

console.log(firstName.toUpperCase());

const title = "Best reads of 2019";
const author =  "mario";
const likes = 30;
 
// concactination way
 let result = "the blog called " + title + " by " + author + " has " + likes + " likes";
 console.log(result);

//template string way
let results = `the blog called ${title} by ${author} has ${likes} likes`

console.log(results);

//creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>${likes}</span>
`;

console.log(html);


//arrays

let ninjas = ['shaun', 'ryu', 'chunli'];
console.log(ninjas)
console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1]);

//array methods
console.log(ninjas.length);

let final = ninjas.join(', ');
console.log(final);

ninjas.push('voke');
console.log(ninjas);

final = ninjas.pop();
console.log(ninjas);
console.log(final);

//methods to return boleans

let email = "luigi@netnija.com"
let names = ['ken', 'john', 'kiragu']

let check = email.includes("!");
console.log(check);
check = names.includes('john');
console.log(check);

//comparision operators
let age1 = 25;
console.log(age==25);
console.log(age!=26);
console.log(age>20);
console.log(age<20);
console.log(age<=25);
console.log(age>=25);

//type conversion 

let score = "100";
console.log(score + 1);
console.log(typeof score);

score = Number(score);
console.log(score +1);
console.log(typeof score);

score = String(score);
console.log(typeof score);


// yo, i'm a JS file.
// console.log('Alooo, we be good up in here with the HS...hey hey');

//hello. py
// getting input

// using var
// and cameCase


// var promptText = 'what is your name? ';
// var userName = prompt(promptText);

// // uses string concatenation 
// var greeting = 'hello, ' + userName + '!';
// console.log(greeting);

// ====== now, different variable declarations
// using let and const
// rule of thumb, use const until you get an error

// const PROMPT_TEXT = 'what is your name?'
let userName = 'ianhundere';
// string interpolation a.k.a. "template literals"
// 1. Replace quotes with backticks
// 2. Remove the + signs
// 3. Wrap your variables in ${}
userName = `${userName} is a bozo`;
const greeting = `hello, ${userName}!`;
console.log(greeting);


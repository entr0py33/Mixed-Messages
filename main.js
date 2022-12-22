//Randomly pick an element from an array
function pickElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
} 

//Load JSON, pick a quote
const json = require('./quotes.json');
const entry = pickElement(json);

//Output quote
console.log(`A random quote about ${entry.Category}:`);
console.log(`"${entry.Quote}"  -${entry.Author}`);
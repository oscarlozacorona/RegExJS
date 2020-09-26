let txt = "Programming courses always starts with a hello world example.";

let regex1 = /\s/;
let regex2 = /world/;

// will return a value with a bit of info
console.log(regex1.exec(txt));

// returns a boolean on weather a pattern is found
console.log(regex2.test(txt));

// is the same thing as the .exec function
console.log(txt.match(regex1));

// finds the regEx index
console.log(txt.search(regex1));

// replaces the found location with the second param
console.log(txt.replace(regex1, "h1"));

// returns an array based on the delimiter in this case the regEx
console.log(txt.split(regex1));

/* some of the flags for regEx
    g - global, match more than one occurance
    i - case insensitive match
    m - multi-line match 
*/

let txt = "Programming courses always startS with a hello world example.";

let regex1 = /s\s/gi;
let regex2 = /world/;

// console.log(txt.match(regex1));
console.log(regex1.exec(txt));
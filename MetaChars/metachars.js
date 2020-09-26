/* some of the meta chars for regEx
    . - a wildcard for one character
    \ - escape caracter
    \t = tab
    \v = vertical tab
    \n - newline
    \r - carriage return
*/

let txt = "how is that so hot? h    t h\nt";

let txt2 = "This could/ be the final word."

let regex1 = /h\tt/g;

let regex2 = /d\n/g;

// console.log(txt.match(regex1));
console.log(txt.match(regex1));
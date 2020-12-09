/* 
    [**] matches the internal of the square brakts
    [1-6] or [a-z] or [1-6a-zA-z -] - these are ranges
    ^ start of line or for negation like in [^]

    Shorthands
    \d - [0-9]
    \w - [a-zA-z0-9]
    \s - [\t\r\n]
    \D - [^0-9]
    \W - [^a-zA-Z0-9]
    \S - [^\t\r\n]

*/

let txt = "“He is holding his hat in his hand.”";

let regEx = /[ .a-z]/g;

console.log(txt.match(regEx));

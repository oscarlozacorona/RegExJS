/*
  + - one or more occurences
  ? - zero or one occurences
  * - zero or more ocurrences
  
  {min, max} - matches min to max occurrences
  {min} - matches min occurences
  {min,} Matches min or more occurences
*/

let txt = "This45consists65of75numbers85and95letters";

let regEx = /\w{4,}?/g;

console.log(txt.match(regEx));

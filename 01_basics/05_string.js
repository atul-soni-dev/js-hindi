let name='atul soni'
let repocount=1

//console.log(name + repocount + " value"); outdtaed technique

console.log(`My name is ${name} and my repo count is ${repocount}.`);

const newgame=new String('atul')
console.log(newgame[0]);
console.log(newgame.__proto__);

console.log(newgame.toUpperCase());
console.log(newgame.charAt(3));
console.log(newgame.indexOf('u'));

const newstring=newgame.substring(1,3)  //last parameter is excluded 
console.log(newstring);

const anotherstring=newgame.slice(-3,3)  //last parameter is excluded 
console.log(anotherstring);

const newstringone="   Atul soni    "
console.log(newstringone.trim());

const url="https://atul.com/atul%20soni"
 console.log(url.replace('%20','  '));
 




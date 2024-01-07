const {readFileSync, writeFileSync}= require('fs');

const first = readFileSync("./content/first.txt", 'utf-8');
const second = readFileSync("./content/second.txt", 'utf8');
console.log(first,"\n",second);

writeFileSync("./content/third.txt", `This is result file: ${first} ${second}`,{flag: "a"},"/n");

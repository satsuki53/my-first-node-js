'use stict'
const number = process.argv[2] || 0;
let sum = 1;
for (let i = 1; i <= number; i++){
    sum = sum * i;
}
console.log(sum);

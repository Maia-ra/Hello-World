const myName = 'Maiara';
console.log(myName);
// Variáveis do tipo Constante (Const) não podem ser reatribuidas
//Pois geram erro no código

let w = 4;
w = w + 1;

console.log(w); // Output: 5

let z = 4;
z += 1;

console.log(z); // Output: 5

let x = 20;
x -= 5; // x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // y = y * 2
console.log(y); // Output: 100

let m = 8;
m /= 2; // m = m / 2
console.log(m); // Output: 4

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

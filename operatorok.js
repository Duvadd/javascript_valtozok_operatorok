console.log(5 == "5"); // true
console.log(typeof(5));  
console.log(typeof("5")); 

console.log(5 === "5") // false

// LOGIKAI OPERATOROK && (és), || (vagy), ! (nem)
let szam = 6
console.log(szam > 5 && szam < 10); 
console.log(szam === 5 || szam === 6);


let z;
z=3+4; // összeadás
z=3-4; // kivonás
z=2*3; // szorzás
z=2/3; // osztás
z=3%2; // modulo
z=3**2; // hatványképzés (hatványalap**hatványkitevő)

let x,y;
x=5;
y=++x; // preinkrement
console.log(`x=${x}, y=${y}`);

x=5;
y=x++; // posztinkrement
console.log(`x=${x}, y=${y}`);
x=5;

let b = 1
let c = 10
let d = 20
let a = b > 2 ? c : d 
console.log('a='+a)


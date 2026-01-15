// változó stipusok //
console.log(typeof(2)); // number
console.log(typeof(true)); // boolean
console.log(typeof('Aladár')); // string
console.log(typeof({name:'Béla', age: 42})); // object
console.log(typeof(function f(a, b) {return a + b})); // function
console.log(typeof(nonexisting)); // undefined

// NUMBER (számok)
console.log(a)
console.log(a.toFixed(2)) // kerekites
console.log(typeof(a.toFixed(2))) // string lesz a tipusa

// STRING (szövegek)
let firtName = 'John'
let lastname = 'Doe'
console.log('Hello' + firtName + lastname)
console.log('Hello ${firtName} ${lastname}')

let kocka = "kocka"
let has = "has"
let doboz = kocka + has
console.log(doboz)

// BOOLEAN
console.log('BOOLEAN')
console.log(typeof true)
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean("")) // false
console.log(Boolean("a")) // true

// Object 
let person = {
    name : "Eminem"
    age: 39,
    isStudent: false 
}

console.log(person)
console.log(typeof(person))
console.log(person.name)
console.log(person.age)
console.log(person.isStudent)
console.log(person.address)

let xy;
console.log(xy);
console.log(typeof xy);
console.log();

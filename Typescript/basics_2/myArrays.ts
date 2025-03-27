

let humans = ["Bob", "Jon", "Jane"];
console.log(humans[0]);
console.log(humans[1]);
console.log(humans[2]);
// let muutujat saab mitu korda muuta
console.log(humans)
humans = ["Tarza", "Mario", "Luigi"];

console.log(humans)

const heros =["Spiderman", "Catwoman", "Thor"]
// heros =["Spiderman", "Catwoman", "Thor"] see annab errorit kuna consti saab ainult uhe korra maaratleda
console.log(heros)

const someNumbers = [
    [255,255,255],
    [1,1,1]
]

console.log(someNumbers)

//push lisab uue vaartuse juurde consti
heros.push("Superman")

//heros.push(3) // annab errorit kuna nr 3 on INT andmetuup

console.log(heros)

// sisesta kasklus: npx tsc myArrays.ts
// ja see tekitab paralleelselt javascripti faili
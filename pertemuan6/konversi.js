// konversi string

let age = 90;

console.log(age);
console.log(typeof age);

//convert
let convert = String(age);
console.log(convert);
console.log(typeof convert);

console.log(age);
age = String(age);
console.log(age);

//konversi numerik
let phone = "895444";
console.log(typeof +phone);

let sizeDress = "50";
sizeDress = Number(sizeDress);
console.log(sizeDress);

//konversi boolean (true/false, 1/0)
let valueOne = 0;
let valueTwo = 1;
let valueThree = "";
let valueFour = "hello";
let valueFive = null;
let valueSix = undefined;
let valueSeven = NaN;

console.log(Boolean(valueOne));
console.log(Boolean(valueTwo));
console.log(Boolean(valueThree));
console.log(Boolean(valueFour));
console.log(Boolean(valueFive));
console.log(Boolean(valueSix));
console.log(Boolean(valueSeven));

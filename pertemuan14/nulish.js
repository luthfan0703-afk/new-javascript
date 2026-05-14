//! OPERATOR KONDISI NULISH " ??""

let name = null;

//* jika name value tidak null atau undefined maka tampilkan isi name
let userName = name ?? "tidak memiliki nama";
console.log(userName);


let c = " ";
let result = c ?? "hacker"; //* jika 'c' null / undefined maka lewatkan 
console.log(result);

let apple = null;
let grape = null;
let watermelon = null;
let blueberry = "";

console.log(apple ?? grape ?? watermelon ?? blueberry);


let apple1 = null;
let grape1 = null;
let watermelon1 = "";
let blueberry1 = "";

console.log(apple1 ?? grape1 ?? blueberry ?? watermelon1);

let apple2 = null;
let grape2 = null;
let watermelon2 = "0";
let blueberry2 = "";

console.log(apple2 || grape2 || blueberry2 || watermelon2);

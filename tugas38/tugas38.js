let apple = null;
let mangga = "" ;
let jeruk = "ada jeruk";

console.log(apple || mangga || jeruk ); // (variabel: jeruk) "ada jeruk"

let teh = null;
let kopi = undefined;
let susu = 10;

console.log(teh ?? kopi ?? susu); // (variabel: susu)10
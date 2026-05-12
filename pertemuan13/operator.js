//! operator AND ( && ) (digunakan untuk mengecek apakah dua kondisi atau lebih bernilai true.)
let apple = true;
let orange = false;

console.log(apple);
console.log(orange);

console.log(apple && true);
console.log(apple && false);

let age = 18;
let hasilUjian = 90;
let nilaiKelulusan = 91;
let hasCertificate = true;

console.log(age > 18 && hasCertificate);

if (age <= 18 && nilaiKelulusan >= 90 && hasCertificate) {
  console.log("bisa daftar UIM");
} else {
  console.log("tidak bisa daftar UIM");
}

//! operator OR ( || ) (jika salah satu true, maka hasilnya true)

let apple2 = true;
let orange2 = false;

console.log(apple2 || true);
console.log(apple2 || false);

let abdur = 86;
let abdul = 93;
let fadhil = 85;
let nilaiKelulusanSantri = 90;

if (abdur >= 90 || abdul >= 90 || fadhil >= 90 || nilaiKelulusanSantri >= 90) {
  console.log("lulus");
} else {
    console.log("tidak lulus");
    
}

let lulus = true;
let tidakLulus = false;
let hasil;

if (lulus || tidakLulus) {
  hasil = "lulus";
} else {
  hasil = "tidak lulus"
}

console.log(hasil);

hasil = lulus && tidakLulus ? "lulus" : "tidak lulus";
console.log(hasil);

//! operator NOT (!) (membalikan niali operand)
let lulus2 = true;
let tidakLulus2 = false;

console.log(lulus2);
console.log(!lulus2);

let student = false; 

if (!student){
  console.log("tidak masuk");
} else {
  console.log("masuk"); 
}

let login = false;

if (!login){
  console.log("tidak masuk");
} else {
  console.log("masuk"); 
}

let isMarried = 0;

if (!isMarried){
  console.log("tidak masuk");
} else {
  console.log("masuk"); 
}

//! mengabungkan beberapa operator logika 

let money = 1000;
let risol = 900;
let tabungan = true;
let drink = true;

if (money > risol && tabungan && drink){
  console.log("bisa beli");
} else {
  console.log("tidak bisa beli");
}
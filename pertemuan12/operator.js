//* if statement
let ips = "8";
let remedial = 8;

if (ips < remedial) {
  console.log("harus mengikuti ujian remed");
}

if (ips >= remedial) {
  console.log("console 2");
}

if (ips === remedial) {
  console.log("console 3");
}

//! if else ... statement
if (true) {
  console.log("tampilan 1");
} else {
  console.log("tampilan 2");
}

//! konvensi boolean

if ("rafkha") {
  console.log("jawaban 1");
} else {
  console.log("jawaban 2");
}

//! switch Statment
let buah = "apel";

switch (buah) {
  case "anggur":
    console.log("ini adalah anggur");
    break;
  case "jeruk":
    console.log("ini adalah jeruk");
    break;
  case "apel":
    console.log("ini adalah apel");
    break;
  default:
    console.log("ini adalah buah yang lain");
}

const binatang = "jerapah";

switch (binatang) {
  case "hiu":
    console.log("ini adalah hiu");
    break;
  case "kuda":
    console.log("ini adlah kuda");
    break;

  default:
    console.log("ini adalah binatang");
}

//! ternary operator / operator kondisional
let numberShoes = 42;
let hasil = numberShoes > 42 ? "ukuran besar" : "ukuran kecil";

console.log(hasil);

if (numberShoes > 42) {
  console.log("ukuran besar");
} else {
  console.log("ukuran kecil");
}

//* latihan
let bInggris = 87;
let bIndonesia = 90;
let nilaiIps = 70;
let sejarah = 82;

let nilaiKelulusanInggris = 90;
let nilaiKelulusanBindonesia = 91;
let nilaiKelulusanIps = 69;
let nilaiKelulusanSejarah = 82;

if (bIndonesia > nilaiKelulusanInggris) {
  console.log("lulus tanpa remedial");
} else if (bIndonesia <= nilaiKelulusanInggris) {
  console.log("lulus dengan remedial");
} else {
  console.log("tidak lulus dan harus ujian ulang");
}

switch (bIndonesia) {
  case nilaiKelulusanBindonesia:
    console.log("ini adalah hiu");
    break;
  case nilaiKelulusanInggris:
    console.log("ini adlah kuda");
    break;

  default:
    console.log("ini adalah binatang");
}

//! catatan
let kelulusan =
  bIndonesia >= nilaiKelulusanBindonesia
    ? "kodok"
    : sejarah >= nilaiKelulusanIps
      ? "kucing"
      : nilaiIps <= nilaiKelulusanIps
        ? "kerang"
        : "kancil";
console.log(kelulusan);

//! penggunaan ?

let isLogin = false;
let hasilBox = isLogin ? "lanjut proses " : "tolak proses";
console.log(hasilBox);
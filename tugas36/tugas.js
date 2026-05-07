//* NO.1
let nilaiUjianAndi = 78;
if (nilaiUjianAndi > 90) {
  console.log("nilai A");
} else if (nilaiUjianAndi > 75) {
  console.log("nilai B");
} else {
  console.log("nilai C");
}

//*NO .2
let kodePassword = "admin123";

if (kodePassword) {
  console.log("login berhasil");
} else {
  console.log("password salah");
}

//*NO .3
let senin = 1;
let selasa = 2;
let rabu = 3;

switch (senin) {
  case 1:
    console.log("senin");
    break;
  case 2:
    console.log("selasa");
    break;
  case 3:
    console.log("rabu");
    break;
  default:
    console.log("hari tidak valid");
    break;
}

//*NO .4
let admin = "admin";
let user = "user";
let unknown = "tidak diketahui";

switch (admin) {
  case "admin":
    console.log("akses penuh");
    break;
  case "user":
    console.log("akses terbatas");
    break;

  default:
    console.log("tidak dikenali");
    break;
}

//*NO .5
let umur = 18;
let dewasa = umur < 18 ? "anak-anak" : "dewasa";
console.log(dewasa);

//*NO .6
let isLogin = true;
let login = isLogin ? "selamat datang" : "silakan login";
console.log(login);

//*NO .7
let nilai = 80;

let grade = nilai >= 90 ? "A" : nilai > 75 ? "B" : nilai >= 60 ? "C" : "D";
console.log(grade);

//*NO .8
let total = 75000;

let totalBelanja =
  total > 100000 ? "20%" : total > 50000 ? "10%" : "tidak ada diskon";

console.log(totalBelanja);

//*NO .9
let angka = 7;

if (angka % 2 === 0) {
  console.log("angka genap");
} else {
  console.log("angka ganjil");
}

//* NO.10 bonus
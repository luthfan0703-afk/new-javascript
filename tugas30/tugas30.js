// soal pertama
let permenAna = 30,
  permenBudi = 10,
  updatePermenAna = permenAna - permenBudi,
  updatePermenAnaSetelahBeliLagi = 20 ** 2;
console.log(
  "Jumlah permen ana yang dimiliki Sekarang adalah " + updatePermenAna,
);
console.log(
  "Jumlah permen ana adalah " +
    updatePermenAna +
    " setelah diquadratkan adalah " +
    updatePermenAnaSetelahBeliLagi +
    " ",
);

// soal ke-2
let kucingPertama = "ali ",
  kucingKedua = "hasan",
  semuaKucingAna = kucingPertama + kucingKedua;
console.log(semuaKucingAna);

// soal ke-3
let belalang = "12";
let nyamuk = "11";
let angsa = 10;

let hasilBelalangNyamuk = +belalang + nyamuk;
console.log(
  "hasil pertama adalah " +
    hasilBelalangNyamuk +
    " penjelasan hasil pertama adalah karena mengubah belalang dari string ke number Lalu number dijumlahkan dengan veriable nyamuk maka alhasil terjadi konversi",
);

let hasilNyamukAngsa = +nyamuk + angsa;
console.log(
  "hasil pertama adalah " +
    hasilNyamukAngsa +
    " penjelasan hasil kedua adalah karena variable nyamuk yang ditambahkan sebuah (+) maka al hasil menjadi sebuah tipe data number maka terjadi penjumlahan",
);

//soal ke-4
let buku = 5000 * 5,
  bukuNonFiksi = 7000 * 3,
  pena = 2000 * 2;
updateTotal = buku + bukuNonFiksi + pena;

console.log("Total semua biaya yang harus dibayar Aisha adalah " + updateTotal);

//soal ke-5
let penjumlahan1 = 5 + 3 * 2,
  penjumlahan2 = (5 + 3) * 2;

console.log("Nilai penjumlahan yang pertama adalah " + penjumlahan1);
console.log("Nilai penjumlahan yang kedua adalah " + penjumlahan2);
console.log(
  "Penjelasan penjumlahan yang pertama adalah karena penjumlahan perkalian lebih dahulukan daripada penjumlahan tambahan",
);
console.log(
  "Penjelasan penjumlahan yang kedua adalah karena di penjumlahan tambahan terdapat kurung jadinya lebih didahulukan daripada penjumlahan perkalian",
);

//soal ke-6
let kresek = 4,
  kotak = 6,
  ember = 5 + (kresek = kotak);

console.log("Nilai isi kresek adalah " + kresek);
console.log("Nilai isi kotak adalah " + kotak);
console.log("Nilai isi ember adalah " + ember);
console.log(
  "Penjelasan nilai dari ember adalah karena value variabel kresek diubah menjadi value variabel kotak maka angka yang dihasilkan menjadi 6 bukan empat lagi danstelah itu dijumlahkan dengan 5 atau secara singkatnya seperti ( kresek= 4 + 5 = 11) ",
);

//soal ke-7
let x, y, z;
z = 5 + 10 + 15;
x = y = z;

console.log("nilai x adalah " + x);
console.log("nilai y adalah " + y);
console.log("nilai z adalah " + z);

//soal ke-8
let money = 4;
money *= 2;
money *= 2; 

console.log("nilai variable money adalah " + money);

//soal ke-9
let j = 5;
j++;
let k = 8;
k--;

console.log("Hasil varibaje j adalah " + j + " dan variable k adalah " + k);
console.log("Hasil j demikian karena value dari j di naikan sebanyak 1");
console.log("Hasil k demikian karena value dari k di kurangkan sebanyak 1");

//soal ke-10
let room = "hafs";
let age = 18;
let shoesNumber = "42";
let married = false;

console.log(typeof room);
console.log(typeof age);
console.log(typeof shoesNumber);
console.log(typeof married);

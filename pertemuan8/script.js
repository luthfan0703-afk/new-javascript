let alamat = document.getElementById("address");
console.log(alamat.textContent);

let gang = document.getElementById("rumah");
console.log(gang.value);

//! mengambil elemen class dengan cara yang pertama (hanya untuk satu elemen class saja)
let test = document.querySelector(".support");
console.log(test.textContent);

//! mengambil elemen dengan lebih dari satu class
let view = document.getElementsByClassName("card");
console.log(view);
//* cara memanggil salah satu content nya
console.log(view[1].textContent);

console.log(window.innerWidth);
console.log(window.screenY);

//! addEventListener
let btn = document.getElementById("buttonCard");
btn.addEventListener("click", () => {
  alert("button diclick");
  console.log("setelah button diclick");
});

//* contoh

document.getElementById('showBtn').onclick = () =>  {
    document.getElementById('resultBox').innerHTML =
    "jenis kelamin: " + document.getElementById('userGender').value;
};


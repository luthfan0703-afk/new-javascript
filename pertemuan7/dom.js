let container = document.getElementById("myDiv");
console.dir(container);
console.log(container.textContent);

console.dir(document);

let box = document.getElementById("mySpan");
console.dir(box.textContent);

//!update value
box.textContent = "hafidz";

console.log(box.textContent);

//* update dengan sebuah tag html yang value tagnya kosong
let text = document.getElementById("content");

text.textContent = 10;

//!menambahkan tag html
//?buat element html paragraf (p)
let paragrafElement = document.createElement("p");

//*menyisipkan element paragraf didalam div

//document.getElementById('kotak').appendChild(paragrafElement);
paragrafElement.textContent = "langit cerah";

document.getElementById("kotak").appendChild(paragrafElement);

//! value
let number = document.getElementById("noHp");
console.log(number.value);

//* mengambil value input dari input user
let gender = document.getElementById("gender");
console.log(gender);

//! soal pertama

let soalPertama = document.getElementById("welcomeBox");
soalPertama.textContent = "belajar DOM itu menyenangkan";

let soalPertamaNama = document.getElementById("studentName");
soalPertamaNama.textContent = "nama saya luthfan";

//! soal kedua

let noteAreaId = document.createElement("p");
document.getElementById("noteArea").appendChild(noteAreaId);
noteAreaId.textContent = "Saya sedang belajar createElement";

//! soal ketiga

//* di dalam inline

//! soal keempat

let contact = document.getElementById("contactNumber");
console.log(contact.value);

contact.value = "08123456789";

//! soal ke lima

//* di dalam inline
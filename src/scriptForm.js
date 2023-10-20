import { tanggalMulai, tanggalSelesai } from "../src/script";

var formSelesai = document.getElementById("selesai");
var formMulai = document.getElementById("mulai");

document.addEventListener("DOMContentLoaded", function () {
  formMulai = tanggalMulai;
  formSelesai = tanggalSelesai;
});

console.log(tanggalMulai);

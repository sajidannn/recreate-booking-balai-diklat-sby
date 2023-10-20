const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navActive = document.querySelectorAll("nav a");
const links = document.querySelectorAll(".nav-links li");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

var modal = document.getElementById("modalTgl");
var btnTgl = document.getElementById("cek-tgl");
var pesan = document.getElementById("pesan");
var not_available = document.getElementById("not-available");
var span = document.getElementsByClassName("close")[0];
var inputMulai = document.getElementById("tgl-mulai-label");
var inputSelesai = document.getElementById("tgl-selesai-label");

var tableCek = document.getElementById("table-cek-riwayat");
var btnEmail = document.getElementById("cek-email");
var inputEmail = document.getElementById("email-cek");

var formSelesai = document.getElementById("selesai");
var formMulai = document.getElementById("mulai");

function handleNavActiveClick(clickedLink) {
  // Hapus class 'active' dari semua link
  navActive.forEach((link) => {
    link.classList.remove("active");
  });

  // Tambahkan class 'active' hanya ke link yang diklik
  clickedLink.classList.add("active");
}

navActive.forEach((link) => {
  link.addEventListener("click", function () {
    handleNavActiveClick(this);
  });
});

function handleTabClick(tabElement) {
  showTab(tabElement);
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  hamburger.classList.toggle("toggle");
}

function showTab(tabToShow) {
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "none";

  tabToShow.style.display = "block";
}

// Tambahkan event listener untuk navbar atau elemen yang memicu pergantian tab
document.getElementById("navTab1").addEventListener("click", function () {
  showTab(tab1);
  handleTabClick(tab1);
});

document.getElementById("navTab2").addEventListener("click", function () {
  showTab(tab2);
  handleTabClick(tab2);
});

document.getElementById("navTab3").addEventListener("click", function () {
  showTab(tab3);
  handleTabClick(tab3);
});

const navTab3Elements = document.getElementsByClassName("navTab3");
for (let i = 0; i < navTab3Elements.length; i++) {
  navTab3Elements[i].addEventListener("click", function () {
    showTab(tab3);
    handleNavActiveClick(this);
  });
}

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  hamburger.classList.toggle("toggle");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let x = document.getElementsByClassName("mySlides1");
  let modal = document.getElementById("myModal");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}

export let tanggalMulai = 20;
export let tanggalSelesai;

btnTgl.onclick = function () {
  // Dapatkan tanggal dari kedua input
  tanggalMulai = inputMulai.value;
  tanggalSelesai = inputSelesai.value;

  // Daftar tanggal yang tidak tersedia
  var tanggalTidakTersedia = [
    "2023-10-03",
    "2023-10-04",
    "2023-10-05",
    "2023-10-15",
    "2023-10-16",
    "2023-10-17",
    "2023-10-18",
    "2023-10-19",
    "2023-10-22",
    "2023-10-23",
    "2023-10-27",
    "2023-10-28",
    "2023-10-29",
    "2023-10-30",
    "2023-10-31",
  ];

  if (
    tanggalTidakTersedia.includes(tanggalMulai) ||
    tanggalTidakTersedia.includes(tanggalSelesai)
  ) {
    var modalText = document.querySelector(".modal-content p");
    modalText.innerText =
      "Maaf, pada tanggal tersebut gedung diklat tidak tersedia.";
    not_available.style.display = "block";
    modal.style.display = "block";
  } else if (tanggalMulai && tanggalSelesai) {
    if (tanggalMulai > tanggalSelesai) {
      alert("Tanggal tidak valid.");
      return;
    }

    // Tampilkan modal dengan tanggal yang diisi pada modal
    var modalText = document.querySelector(".modal-content p");
    modalText.innerText =
      "Jadwal Gedung diklat Surabaya tersedia pada tanggal " +
      tanggalMulai +
      " sampai dengan " +
      tanggalSelesai;
    pesan.style.display = "block";
    modal.style.display = "block";
  } else {
    alert("Harap isi kedua tanggal sebelum mengecek.");
  }
};

not_available.onclick = function () {
  modal.style.display = "none";
  pesan.style.display = "none";
  not_available.style.display = "none";
  inputMulai.value = "";
  inputSelesai.value = "";
  inputEmail.value = "";
};

// Ketika pengguna menutup modal
span.onclick = function () {
  modal.style.display = "none";
  pesan.style.display = "none";
  not_available.style.display = "none";
  inputMulai.value = "";
  inputSelesai.value = "";
  inputEmail.value = "";
};

// Ketika pengguna mengklik di luar modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    pesan.style.display = "none";
    not_available.style.display = "none";
    inputMulai.value = "";
    inputSelesai.value = "";
  }
};

var dataEmail = {
  "ahmadnursajidan@gmail.com": [
    {
      no: 1,
      kegiatan: "Diklat UKM",
      tanggalMulai: "22-05-2023",
      tanggalSelesai: "25-05-2023",
      status: "Disetujui",
    },
    {
      no: 2,
      kegiatan: "Bantengan",
      tanggalMulai: "12-07-2023",
      tanggalSelesai: "12-07-2023",
      status: "Tidak disetujui",
    },
    {
      no: 3,
      kegiatan: "Olimpiade Sains Nasional",
      tanggalMulai: "12-11-2023",
      tanggalSelesai: "15-12-2023",
      status: "Proses peninjauan",
    },
  ],
  "anursajidan@gmail.com": [
    {
      no: 1,
      kegiatan: "Karawitanesia",
      tanggalMulai: "27-10-2023",
      tanggalSelesai: "28-10-2023",
      status: "Disetujui",
    },
  ],
};

btnEmail.onclick = function () {
  var inputEmailValue = inputEmail.value;
  if (inputEmailValue !== "") {
    var emailData = dataEmail[inputEmailValue];

    if (emailData) {
      // Data ditemukan, tampilkan di tabel
      var tableBody = document.querySelector(".table-cek-riwayat tbody");
      tableBody.innerHTML = ""; // Bersihkan isi tabel sebelum mengisi

      emailData.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.no}</td>
          <td>${item.kegiatan}</td>
          <td>${item.tanggalMulai}</td>
          <td>${item.tanggalSelesai}</td>
          <td><p>${item.status}</p></td>
        `;
        tableBody.appendChild(row);
      });

      tableCek.style.display = "block";
    } else {
      // Email tidak ada dalam data, tampilkan pesan
      var modalText = document.querySelector(".modal-content p");
      modalText.innerText = "Email belum terdaftar.";
      not_available.style.display = "block";
      modal.style.display = "block";
      tableCek.style.display = "none";
    }
  } else {
    alert("Harap isi email sebelum mengecek.");
  }

  // Ambil semua elemen <p> dalam tabel
  const statusElements = document.querySelectorAll(
    ".table-cek-riwayat tbody tr td p"
  );

  // Loop melalui setiap elemen dan berikan gaya sesuai dengan teksnya
  statusElements.forEach((element) => {
    const status = element.innerText;

    if (status === "Disetujui") {
      element.style.backgroundColor = "#3CA94C";
      element.style.color = "white";
    } else if (status === "Tidak disetujui") {
      element.style.backgroundColor = "#DB3C39";
      element.style.color = "white";
    } else if (status === "Proses peninjauan") {
      element.style.backgroundColor = "#F5D82F";
      element.style.color = "black"; // Atur warna teks sesuai kebutuhan
    }
  });
};

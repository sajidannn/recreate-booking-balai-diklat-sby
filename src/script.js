const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navActive = document.querySelectorAll("nav a");
const links = document.querySelectorAll(".nav-links li");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

navActive.forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus class 'active' dari semua link
    navActive.forEach((link) => {
      link.classList.remove("active");
    });

    // Tambahkan class 'active' hanya ke link yang diklik
    this.classList.add("active");
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

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  hamburger.classList.toggle("toggle");
});

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


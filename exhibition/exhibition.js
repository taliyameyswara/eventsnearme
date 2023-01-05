var dataFoto = [
  "img/ex1.jpg",
  "img/ex2.jpg",
  "img/ex3.jpg",
  "img/ex4.jpg",
  "img/ex5.jpg",
  "img/ex6.jpg",
  "img/ex7.jpg",
  "img/ex8.jpg",
  "img/ex9.jpg",
];
var dataNamaEvent = [
  "True Beauty Exhibition",
  "Convention Exhibition",
  "Super5 Exhibition",
  "Jakarta Beauty",
  "Jakarta Fair Kemayoran",
  "Fishing Tackle Exhibition",
  "Photo Fair 2022",
  "Plastic & Rubbers",
  "Indonesia Architecture Exhib",
];
var dataTempat = [
  "Depok",
  "BSD City",
  "Jakarta",
  "Jakarta",
  "Jakarta",
  "Jakarta",
  "Bangkok",
  "Jakarta",
  "BSD City",
];
var dataWaktu = [
  "01-03 July 2022",
  "16-20 November 2022",
  "1-3 July 2022",
  "28-31 July 2022",
  "9 Juny - 17 July 2022",
  "20-23 October 2022",
  "23-27 November 2022",
  "16-19 November 2022",
  "14-17 July 2022",
];
var dataHarga = [
  "Free",
  "Free",
  "Free",
  "Free",
  "Free",
  "Free",
  "Free",
  "Free",
  "Free",
];
var link = [
  "ex1.html",
  "ex2.html",
  "ex3.html",
  "ex4.html",
  "ex5.html",
  "ex6.html",
  "ex7.html",
  "ex8.html",
  "ex9.html",
];

var item = document.getElementById("item");

for (var i = 0; i < dataNamaEvent.length; i++) {
  item.innerHTML +=
    "<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12'><a href=" +
    link[i] +
    " class='linkevent'><div class='card my-md-3'><img src=" +
    dataFoto[i] +
    " class='card-img-top img-responsive'/><div class='card-body'><h5 class='card-title pb-2'>" +
    dataNamaEvent[i] +
    "</h5><p class='card-text'>" +
    dataWaktu[i] +
    "</p><p class='card-text'>" +
    dataTempat[i] +
    "</p><p class='card-text text-secondary'>" +
    dataHarga[i] +
    "</p></a><div class='d-flex justify-content-end'><button class='btn save'><i class='fa-regular fa-bookmark'></i></button></div></div></div>";
}

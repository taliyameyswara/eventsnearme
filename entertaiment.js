var dataFoto = [
  "entertaiment/img/ent1.jpg",
  "entertaiment/img/ent2.jpg",
  "entertaiment/img/ent3.jpg",
  "entertaiment/img/ent4.jpg",
  "entertaiment/img/ent5.jfif",
  "entertaiment/img/ent6.jpg",
  "entertaiment/img/ent7.png",
  "entertaiment/img/ent8.jpg",
  "entertaiment/img/ent9.jpg",
];
var dataNamaEvent = [
  "DWP 2022",
  "Pesta Rakyat Dewa 19",
  "Connectifest",
  "Impactnation",
  "Korean Fair",
  "Nostalgiveus",
  "Semarang Flowers Fest",
  "Westlife Concert",
  "Indonesia Online Fest",
];
var dataTempat = [
  "Jakarta",
  "Jakarta",
  "Semarang",
  "Jakarta",
  "Bandung",
  "Jakarta",
  "Semarang",
  "Jakarta",
  "Jakarta",
];
var dataWaktu = [
  "9,10,11 December 2022",
  "12 November 2022",
  "24 July 2022",
  "30-31 July 2022",
  "20 November 2022",
  "1 October 2022",
  "6 Desember 2022",
  "10 Desember 2022",
  "5 Januari 2022",
];
var dataHarga = [
  "IDR 500k-1500k",
  "IDR 500k-1000k",
  "IDR 50k-100k",
  "Free",
  "IDR 35k-40k",
  "Free",
  "Free",
  "IDR 500k-1500k",
  "Free",
];
var link = [
  "ent1.html",
  "ent2.html",
  "ent3.html",
  "ent4.html",
  "ent5.html",
  "ent6.html",
  "ent7.html",
  "ent8.html",
  "ent9.html",
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
    "</p></a><div class='d-flex justify-content-end'><button class='btn save'><i class='fa fa-bookmark'></i></button></div></div></div>";
}

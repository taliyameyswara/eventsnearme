var dataFoto = [
  "img/ent1.jpg",
  "img/ent2.jpg",
  "img/ent3.jpg",
  "img/ent4.jpg",
  "img/ent5.jpg",
  "img/ent6.jpg",
  "img/ent7.png",
  "img/ent8.jpg",
  "img/ent9.jpg",
];
var dataNamaEvent = [
  "Live Design Competition",
  "Street Dance Competition",
  "XCONSPY",
  "HACKATHON",
  "Blog Competition",
  "Otaku Fest",
  "Indihome Blog Competition",
  "Synce Event Competition",
  "Digital Ilustration",
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
  "13-15 June 2022",
  "12 July 2022",
  "1-13 May 2022",
  "20-22 May 2022",
  "15 September 2022",
  "15 September 2022",
  "4 January 2022",
  "30 August 2022",
  "5 November 2022",
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
  "comp1.html",
  "comp2.html",
  "comp3.html",
  "comp4.html",
  "comp5.html",
  "comp6.html",
  "comp7.html",
  "comp8.html",
  "comp9.html",
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

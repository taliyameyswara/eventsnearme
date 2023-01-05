var dataFoto = [
  "img/ent1.jpg",
  "img/ent2.jpg",
  "img/ent3.jpg",
  "img/ent4.jpg",
  "img/ent5.jfif",
  "img/ent6.jpg",
  "img/ent7.png",
  "img/ent8.jpg",
  "img/ent9.jpg",
];
var dataNamaEvent = [
  "Workshop 4.0",
  "UNSIA Workshop",
  "UIN Workshop",
  "Webinar with Yuliandre",
  "Arts Culture Workshop",
  "Bimbingan Teknis",
  "Public Expose 2022",
  "Scholarship Session",
  "Cloud Workshop",
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
  "ws1.html",
  "ws2.html",
  "ws3.html",
  "ws4.html",
  "ws5.html",
  "ws6.html",
  "ws7.html",
  "ws8.html",
  "ws9.html",
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

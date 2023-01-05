let openbtn = document.getElementById("open");
let closebtn = document.getElementById("close");
let sidebar = document.getElementById("side_nav");

openbtn.onclick = function () {
  sidebar.classList.toggle("active");
};

closebtn.onclick = function () {
  sidebar.classList.toggle("active");
};

let getloc = document.getElementById("location-btn");

getloc.addEventListener("click", () => {
  if (navigator.geolocation) {
    getloc.innerText = "Allow to detect location";
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    getloc.innerText = "Your browser not support";
  }
});

function onSuccess(position) {
  getloc.innerText = "Detecting your location";
  let { latitude, longitude } = position.coords;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=010478f60fb54c91bfaa05f2dd1f83bc`
  )
    .then((response) => response.json())
    .then((result) => {
      let allDetails = result.results[0].components;
      let { town, state, country } = allDetails;
      getloc.innerText = `${town}, ${state}, ${country}`;
    })
    .catch(() => {
      getloc.innerText = "Something went wrong";
    });
}

function onError(error) {
  if (error.code == 1) {
    getloc.innerText = "You denied the request";
  } else if (error.code == 2) {
    getloc.innerText = "Location not available";
  } else {
    getloc.innerText = "Something went wrong";
  }
  getloc.setAttribute("disabled", "true");
}

let list = document.getElementsByClassName("list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}

let categories = document.getElementsByClassName("item-categories");
for (let i = 0; i < categories.length; i++) {
  categories[i].onclick = function () {
    let j = 0;
    while (j < categories.length) {
      categories[j++].className = "item-categories";
    }
    categories[i].className = "item-categories active";
  };
}

let savebtn = document.querySelector(".save");
let icon = savebtn.querySelector(".fa-bookmark");
savebtn.onclick = function toggle() {
  if (icon.classList.contains("fa-regular")) {
    icon.classList.replace("fa-regular", "fa");
  } else {
    icon.classList.replace("fa", "fa-regular");
  }
};

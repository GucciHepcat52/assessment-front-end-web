const colorBtn = document.getElementById("color");
const placeBtn = document.getElementById("place");
const ritual = document.getElementById("ritual");

const getColor = (event) => {
  event.preventDefault();
  alert("My favorite color is RED");
};

const getPlace = (event) => {
  event.preventDefault();
  alert("My favorite place to be is HOME");
};

const getRitual = (event) => {
  event.preventDefault();
  alert("My favorite ritual is to listen to a hype song before I workout");
};

colorBtn.addEventListener('click', getColor);
placeBtn.addEventListener('click', getPlace);
ritual.addEventListener('click', getRitual);
let form = document.querySelector("form#contact");
const image = document.querySelector('img');

function handleSubmit(event) {
  event.preventDefault();
  alert("Form has been submitted!");
}

form.addEventListener("submit", handleSubmit);

const handleMouseOver = (event) => {
  event.preventDefault();
  alert(`You are awesome!`);
};

image.addEventListener("mouseover", handleMouseOver);
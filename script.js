function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function showImage() {
  const img = document.createElement("img");
  img.src = `./images/${getRandomInt(1, 9)}.svg`;
  img.style.width = "120px";
  document.body.append(img);
}

showImage();



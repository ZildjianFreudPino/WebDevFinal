const container = document.getElementById("container");
const imgContainer = document.getElementById('BgImage');
var i = 0;
var images = [];
var time = 3000;

images[0] = "../Pcs/pxfuel.jpg";
images[1] = "../Pcs/photo1.jpg";
images[2] = "../Pcs/photo2.jpg";

function changeImg() {
  container.style.opacity = "1";
  imgContainer.style.transition = "opacity 1s ease-in-out";
  imgContainer.style.opacity = "1";
  imgContainer.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(function () {
    container.style.opacity = "0.2";
    imgContainer.style.opacity = "0.2";
    setTimeout(function(){
      changeImg();
    }, time);
  }, time);
}

window.onload = changeImg;

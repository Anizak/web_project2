const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const image = document.getElementById("images");

const data = {
  currentIndex: 0,
  photos: [
    "images/Rectangle 123.png",
    "images/Rectangle 125.png",
    "images/Rectangle 210.png",
    "images/Rectangle 214.png",
    "images/Rectangle 215.png",
    "images/Rectangle 216.png",
  ],
};

nextBtn.addEventListener("click", () => {
  data.currentIndex++;
  if (data.currentIndex > data.photos.length - 1) {
    data.currentIndex = 0;
  }
  image.src = data.photos[data.currentIndex];
});

previousBtn.addEventListener("click", () => {
    data.currentIndex--;
    if(data.currentIndex < 0 ){
        data.currentIndex = data.photos.length - 1;
    }
    image.src = data.photos[data.currentIndex];

});

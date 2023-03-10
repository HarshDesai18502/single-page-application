
//For image Slider
const slides = document.querySelectorAll(".slide");


var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  counter++;
  if (counter > 2) counter = 0;
  slideImage();
};

const goPrevious = () => {
  counter--;
  if (counter < 0) counter = 2;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};



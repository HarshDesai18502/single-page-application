// //For sliding to particular div
// const HomeBtn = document.getElementById("#HomeBtn");
// const CourseBtn = document.getElementById("#CourseBtn");
// const ImageBtn = document.getElementById("#ImageBtn");
// const ContactBtn = document.getElementById("#ContactBtn");
// const AboutBtn = document.getElementById("#AboutBtn");



// const Home = document.getElementById("#Home");
// const Course = document.getElementById("#Course");
// const Image = document.getElementById("#Image");
// const Contact = document.getElementById("#Contact");
// const About = document.getElementById("#About");

// HomeBtn.addEventListener("click", () => {
//     console.log('clicked');
//   Home.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
// });

// CourseBtn.addEventListener("click", () => {
//   Course.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
// });

// ImageBtn.addEventListener("click", () => {
//   Image.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
// });

// ContactBtn.addEventListener("click", () => {
//   Contact.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
// });

// AboutBtn.addEventListener("click", () => {
//   About.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
// });

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



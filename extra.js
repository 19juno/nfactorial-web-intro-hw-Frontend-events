// этот файл я еще не закончила! не проверяйте этот файл и extra.html, пожалуйста, если видите это предложение!

// 4. Создать карусель

/*const carousel = document.getElementsByClassName("carousel");
console.log(carousel);
carousel.style = "width: 400px";
carousel.className =
  "p-2 position-relative d-flex bg-info-subtle border border-primary";*/

/*const carouselCont = document.querySelector("ul");
console.log(carouselCont);

function update() {
  carouselCont.style.transform = "translateX(-100px)";
}

const prevBtn = document.getElementsByClassName("prevBtn");
console.log(prevBtn);
/*prevBtn.className = "position-absolute top-5 end-5";*/
/*prevBtn.addEventListener('click', )
const nextBtn = document.getElementsByClassName("nextBtn");
console.log(nextBtn);
nextBtn.addEventListener('click')*/

/*const liElements = document.querySelectorAll("li");
liElements.className = "d-inline-block";
/*liElements.forEach((element) => {
  element.className = "";
});*/

/*const images = document.querySelectorAll("img");
console.log(images);
images.forEach((item) => {
  item.className = "d-block";
});*/

// .5 extra Создать раскрывающееся меню
const menu = document.getElementsByClassName("menu");
console.log(menu);
const dropdownBtn = document.getElementsByClassName("dropDown");

const dropDown = function () {
  const items = document.getElementsByClassName("items");
  menu.classList.toogle("show");
};

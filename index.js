//console.log("salem alem");

// 1.Добавьте JavaScript к кнопке button, чтобы при
// нажатии элемент <div id="text">Remove me</div> исчезал.
let mybtn = document.getElementById("btn");
console.log(mybtn);
mybtn.addEventListener("click", () => {
  const myDiv = document.getElementById("text");
  myDiv.style.display = "none";
});

// 2. В переменной `button` находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
/*mybtn.addEventListener("click", () => alert("1"));
mybtn.removeEventListener("click", () => alert("1"));
mybtn.onclick = () => alert(2);*/
// onclick сработает по умолчанию, а что касается первого, то он сработает
// потому что removeEvenListener не сработает, так как нет отсылки к конкретной функции из  addEvenListener

//3. При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

const myMessages = document.querySelectorAll(".message");
console.log(myMessages);

myMessages.forEach((element) => {
  const closeBtn = document.createElement("button");
  closeBtn.className = "closeBtn";
  closeBtn.innerHTML = "x";
  closeBtn.addEventListener("click", () => {
    element.remove();
  });
  element.appendChild(closeBtn);
  // тут  я усталь  задавать стили через js, ну и решила (заранее извиняюсь если так нельзя было),
  // задать стиль через bootstrap
  element.className = "position-relative mt-2 ms-5 bg-secondary-subtle";
  element.style = "width: 700px";
  closeBtn.className = "position-absolute top-0 end-0";
});

let cercle1 = document.querySelector(".cercle1");
let cercle2 = document.querySelector(".cercle2");
let cercle3 = document.querySelector(".cercle3");
let cercle4 = document.querySelector(".cercle4");
let cercle5 = document.querySelector(".cercle5");
let cercle6 = document.querySelector(".cercle6");
let cercle7 = document.querySelector(".cercle7");

function circleAppear(cercle) {
  console.log("coucou");
  const newcercles = document.querySelectorAll(cercle);
  newcercles.forEach((newcercle) => {
    newcercle.style.opacity = "1";
    console.log(newcercle.style.opacity);
  });
}

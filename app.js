//Movment Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const anim = document.querySelector(".anim img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const btn = document.querySelector(".btn");


container.addEventListener("mousemove", (e) => {
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});  

//Animate in
container.addEventListener('mouseenter', e => { 
  card.style.transition = 'none';
  //Popout
  title.style.transform = "translateZ(150px)";
  anim.style.transform = "translateZ(200px) rotate(+360deg)";
  purchase.style.transform = "translateZ(125px)";
  description.style.transform = "translateZ(100px)";
  btn.style.transform = "translateZ(75px)";
  });
//Animate out 
container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //PopBack
  title.style.transform = "translateZ(0px)";
  anim.style.transform = "translateZ(0px) rotate(0deg)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  btn.style.transform = "translateZ(0px)";
  });

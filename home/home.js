const threelines = document.querySelector(".threelines");
const sidebarbig = document.querySelector(".sidebarbig");
const sidebar = document.querySelector(".sidebar");
const sideicon = document.querySelector(".sideicon");
const disappear = document.querySelector(".carousel");
//1
const accordionfirst = document.querySelector(".accordionfirst");
const accordionsecond = document.querySelector(".accordionsecond");
const accordionbtn = document.querySelector(".accordionbtn");
//2
const accordionfirst2 = document.querySelector(".accordionfirst2");
const accordionsecond2 = document.querySelector(".accordionsecond2");
const accordionbtn2 = document.querySelector(".accordionbtn2");
//3
const accordionfirst3 = document.querySelector(".accordionfirst3");
const accordionsecond3 = document.querySelector(".accordionsecond3");
const accordionbtn3 = document.querySelector(".accordionbtn3");
//4
const accordionfirst4 = document.querySelector(".accordionfirst4");
const accordionsecond4 = document.querySelector(".accordionsecond4");
const accordionbtn4 = document.querySelector(".accordionbtn4");
//5
const accordionfirst5 = document.querySelector(".accordionfirst5");
const accordionsecond5 = document.querySelector(".accordionsecond5");
const accordionbtn5 = document.querySelector(".accordionbtn5");
//sidenav
threelines.addEventListener("click", () => {
  sidebarbig.classList.toggle("show");
  sidebar.classList.toggle("show");
  disappear.style.display = "none";
});

sideicon.addEventListener("click", () => {
  sidebarbig.classList.remove("show");
  sidebar.classList.remove("show");
  disappear.style.display = "inline-block";
});

//accordions
accordionbtn.addEventListener("click", () => {
  accordionsecond.classList.toggle("exitaccordion");
  accordionbtn.classList.toggle("exitbtnaccordion");
});

accordionbtn2.addEventListener("click", () => {
  accordionsecond2.classList.toggle("exitaccordion");
  accordionbtn2.classList.toggle("exitbtnaccordion");
});
accordionbtn3.addEventListener("click", () => {
  accordionsecond3.classList.toggle("exitaccordion");
  accordionbtn3.classList.toggle("exitbtnaccordion");
});
accordionbtn4.addEventListener("click", () => {
  accordionsecond4.classList.toggle("exitaccordion");
  accordionbtn4.classList.toggle("exitbtnaccordion");
});
accordionbtn5.addEventListener("click", () => {
  accordionsecond5.classList.toggle("exitaccordion");
  accordionbtn5.classList.toggle("exitbtnaccordion");
});

// Scroll
const testcase = document.getElementById("testcase");

window.addEventListener("scroll", () => {
  let sclY = this.scrollY;
  let sclX = this.scrollX;
  let logo = document.querySelector(".navbar-brand");
  if (sclY > 150) {
    testcase.style.height = "60px";
    testcase.style.background = `white`;
    testcase.style.paddingTop = `0px`;
    testcase.style.boxShadow = `0 3px 6px 0 rgb(0 0 0 / 7%)`;
    testcase.style.transition = `all 0.65s`;
    testcase.style.zIndex = `10000`;
    testcase.style.position = `fixed`;
    logo.style.display = "none";
    document.querySelector(".sub").style.marginLeft = "auto";
  } else {
    testcase.style.height = "80px";
    testcase.style.background = `transparent`;
    testcase.style.transition = `all 0.65s`;
    testcase.style.zIndex = `4`;
    testcase.style.position = `absolute`;
    logo.style.display = "block";
    testcase.style.boxShadow = `none`;
  }
});

// Menu
document.querySelector(".menuBar").addEventListener("click", () => {
  document.querySelector(".menu-small-screen").classList.toggle("show_menu");
  document.querySelector(".close").style.display = "block";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".menu-small-screen").classList.toggle("show_menu");
  document.querySelector(".close").style.display = "none";
});

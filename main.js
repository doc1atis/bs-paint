document.querySelector(".color-1").style.backgroundColor = "brown";
document.querySelector(".palette .color-2").style.backgroundColor =
  "blueviolet";
document.querySelector(".color-3").style.backgroundColor = "aqua";
document.querySelector(".color-4").style.backgroundColor = "chartreuse";
document.querySelector(".palette .color-5").style.backgroundColor = "chocolate";

document.querySelector(".palette").childNodes.forEach(el => {
  el.onclick = function() {
    document.querySelector(".brush").style.backgroundColor =
      el.style.backgroundColor;
  };
});

document.querySelector(".canvas").childNodes.forEach(el => {
  el.onclick = function() {
    el.style.backgroundColor = document.querySelector(
      ".brush"
    ).style.backgroundColor;
  };
});

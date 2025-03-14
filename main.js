document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "auto";
});

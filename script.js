function toggleList(id) {
  const list = document.getElementById(id);
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
    // Hide the loader and show the content after the page loads
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
  }
}

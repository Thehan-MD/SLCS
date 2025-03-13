function toggleList(id) {
  const list = document.getElementById(id);
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";

  }
}

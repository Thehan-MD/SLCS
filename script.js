// Toggle List for Team Members
function toggleList(id) {
  const list = document.getElementById(id);
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
}

// FAQ Section Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

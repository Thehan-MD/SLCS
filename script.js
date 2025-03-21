// Toggle List for Team Members
function toggleList(id) {
  const list = document.getElementById(id);
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// FAQ Section Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });

document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
});
});

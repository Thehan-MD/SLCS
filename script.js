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

  // Get the comment input value
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    // Create a new comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `<p>${commentText}</p>`;

    // Add the comment to the comments container
    document.getElementById('commentsContainer').appendChild(commentElement);

    // Clear the input field
    commentInput.value = '';
  }

});
});

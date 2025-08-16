// Form validation with inline error messages
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Reset all errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  // Validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    alert("Message submitted successfully!");
    this.reset();
  }
});

// Add task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    this.remove();
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

// Clear all tasks
function clearTasks() {
  document.getElementById("taskList").innerHTML = "";
}

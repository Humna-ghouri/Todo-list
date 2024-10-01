
  let inputs = document.getElementById("inp");
  let text = document.querySelector(".text");

  function Add() {
      if (inputs.value === "") {
          
Swal.fire({
    title: "<strong>Please <u>Write Something</u></strong>",
    icon: "info",
  });
      } else {
          // Create a new task element
          const taskItem = document.createElement("div");
          taskItem.classList.add("task");
          taskItem.innerHTML = `
              <span class="task-text">${inputs.value}</span>
              <i class="fa-solid fa-edit edit-btn" onclick="editTask(this)"></i>
              <i class="fa-solid fa-trash delete-btn" onclick="deleteTask(this)"></i>
          `;
          text.appendChild(taskItem); // Append the task item to the text container
          inputs.value = ""; // Clear the input field
      }
  }

  // Function to delete task
  function deleteTask(element) {
      element.parentElement.remove(); // Removes the parent <div>
  }

  // Function to edit task
  function editTask(element) {
      const taskText = element.parentElement.querySelector('.task-text');
      inputs.value = taskText.textContent; // Set input field to current task text
      deleteTask(element); // Remove the task after editing
  }
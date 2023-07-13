// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.querySelector("form");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the task name value
    const taskName = document.querySelector(".form-control-lg").value;

    // Get the task description value
    const taskDescription = document.querySelector(".form-control-lg").value;

    // Get the assignee value
    const assignee = document.querySelector(
      ".assign-to .form-control-lg"
    ).value;

    // Get the due date value
    const dueDate = document.querySelector(".due-date .form-control-lg").value;

    // Create a new task object with the form values
    const task = {
      name: taskName,
      description: taskDescription,
      assignee: assignee,
      dueDate: dueDate,
    };

    // Call a function to handle the task
    handleTask(task);

    // Reset the form fields
    form.reset();
  });

  // Function to handle the task
  function handleTask(task) {
    // Display the task in the completed tasks section
    const taskContainer = document.querySelector(".box.container");
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
      <p>Name: ${task.name}</p>
      <p>Description: ${task.description}</p>
      <p>Assignee: ${task.assignee}</p>
      <p>Due Date: ${task.dueDate}</p>
      <div class="actions">
        <button class="edit-btn">Edit</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;
    taskContainer.appendChild(taskElement);

    // Add event listeners for edit and remove buttons
    const editButton = taskElement.querySelector(".edit-btn");
    editButton.addEventListener("click", function () {
      editTask(taskElement, task);
    });

    const removeButton = taskElement.querySelector(".remove-btn");
    removeButton.addEventListener("click", function () {
      removeTask(taskElement);
    });
  }

  // Function to edit a task
  function editTask(taskElement, task) {
    // Update the task properties
    const updatedTask = {
      name: "Updated Task Name",
      description: "Updated Task Description",
      assignee: "Updated Assignee",
      dueDate: "Updated Due Date",
    };

    // Update the task element in the DOM
    const nameElement = taskElement.querySelector("p:nth-of-type(0)");
    const descriptionElement = taskElement.querySelector("p:nth-of-type(1)");
    const assigneeElement = taskElement.querySelector("p:nth-of-type(2)");
    const dueDateElement = taskElement.querySelector("p:nth-of-type(3)");

    //nameElement.textContent = updatedTask.name;
    nameElement.textContent = `Name: ${updatedTask.name}`;
    descriptionElement.textContent = `Description: ${updatedTask.description}`;
    assigneeElement.textContent = `Assignee: ${updatedTask.assignee}`;
    dueDateElement.textContent = `Due Date: ${updatedTask.dueDate}`;
  }

  // Function to remove a task
  function removeTask(taskElement) {
    // Remove the task element from the DOM
    taskElement.remove();
  }
});

// Function to load the Expense Form into the page
function loadExpenseForm() {
  const formContainer = document.getElementById('expense-form');
  formContainer.innerHTML = `
    <div class="input-section">
      <label for="amount">Amount:</label>
      <input type="number" id="amount" placeholder="Enter amount">

      <label for="category">Category:</label>
      <input type="text" id="category" placeholder="Enter category">

      <label for="description">Description:</label>
      <input type="text" id="description" placeholder="Enter description">

      <button id="add-expense-btn">Add Expense</button>
    </div>
  `;
  document.getElementById('add-expense-btn').addEventListener('click', addExpense);
}

// Function to load the Expense List into the page
function loadExpenseList() {
  const listContainer = document.getElementById('expense-list');
  listContainer.innerHTML = `
    <ul id="expenses-list">
      <li>No expenses added yet.</li>
    </ul>
  `;
}

// Function to add an expense
function addExpense() {
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;

  if (amount && category && description) {
    const expenseList = document.getElementById('expenses-list');
    if (expenseList.children.length === 1 && expenseList.children[0].textContent === "No expenses added yet.") {
      expenseList.innerHTML = '';
    }

    const expenseItem = document.createElement('li');
    expenseItem.textContent = `Amount: $${amount}, Category: ${category}, Description: ${description}`;
    expenseList.appendChild(expenseItem);

    // Clear input fields
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
    document.getElementById('description').value = '';
  } else {
    alert('Please fill in all fields');
  }
}

// Load the form and list when the page is loaded
window.onload = function() {
  loadExpenseForm();
  loadExpenseList();
};

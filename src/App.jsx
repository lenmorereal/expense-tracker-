document.getElementById('add-expense-btn').addEventListener('click', addExpense);

function addExpense() {
  // Get values from input fields
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;

  // Check if all fields are filled
  if (amount && category && description) {
    // Create new list item
    const expenseList = document.getElementById('expenses-list');

    // Remove the "No expenses added yet" message if it exists
    if (expenseList.children.length === 1 && expenseList.children[0].textContent === "No expenses added yet.") {
      expenseList.innerHTML = '';
    }

    // Create and append a new list item
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

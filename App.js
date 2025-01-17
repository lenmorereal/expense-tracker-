console.log('Script loaded');  // At the top of app.js

document.getElementById('add-expense-btn').addEventListener('click', function() {
  console.log('Add Expense button clicked');  // When the button is clicked
});


function addExpense() {
  console.log('Add Expense button clicked');  // Debugging statement
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;

  console.log('Amount:', amount, 'Category:', category, 'Description:', description); // Debugging statement

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

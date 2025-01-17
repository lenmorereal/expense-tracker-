document.getElementById('add-expense-btn').addEventListener('click', addExpense);

function addExpense() {
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;

  if (amount && category && description) {
    const expenseList = document.getElementById('expenses-list');
    const expenseItem = document.createElement('li');
    expenseItem.textContent = `Amount: $${amount}, Category: ${category}, Description: ${description}`;
    expenseList.appendChild(expenseItem);

    // Clear input fields after adding expense
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
    document.getElementById('description').value = '';
  } else {
    alert('Please fill in all fields');
  }
}

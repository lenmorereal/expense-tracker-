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

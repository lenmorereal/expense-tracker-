import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <strong>Amount:</strong> ${expense.amount} | <strong>Category:</strong> {expense.category} | <strong>Description:</strong> {expense.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;

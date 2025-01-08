import React from 'react';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="space-y-4">
      {expenses.length === 0 ? (
        <p>No expenses to show</p>
      ) : (
        expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded shadow"
          >
            <div>
              <h3 className="text-xl">{expense.description}</h3>
              <p className="text-gray-600">{expense.category}</p>
            </div>
            <div className="flex space-x-4">
              <span className="text-xl">${expense.amount.toFixed(2)}</span>
              <button
                onClick={() => deleteExpense(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;

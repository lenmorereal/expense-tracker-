import React, { useState } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const addExpense = () => {
    if (amount && category && description) {
      setExpenses([...expenses, { amount, category, description }]);
      setAmount('');
      setCategory('');
      setDescription('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={addExpense}>Add Expense</button>

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {`Amount: $${expense.amount}, Category: ${expense.category}, Description: ${expense.description}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;

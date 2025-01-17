import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || !category || !description) {
      alert('Please fill in all fields');
      return;
    }

    const newExpense = { amount, category, description };
    addExpense(newExpense);
    
    // Clear the form
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="expense-form">
      <h2>Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;

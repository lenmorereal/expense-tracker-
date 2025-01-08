import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && description) {
      const newExpense = {
        id: Date.now(),
        amount: parseFloat(amount),
        category,
        description,
      };
      addExpense(newExpense);
      setAmount('');
      setCategory('');
      setDescription('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex space-x-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;

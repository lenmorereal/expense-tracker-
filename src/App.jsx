// src/App.jsx
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm.jsx';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to handle the form submission
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      
      {/* Pass the addExpenseHandler to ExpenseForm as a prop */}
      <ExpenseForm onAddExpense={addExpenseHandler} />
      
      <div className="expense-list">
        <h2>Expenses</h2>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>{expense.name}: ${expense.amount}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

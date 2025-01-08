import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Chart from './components/Chart';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load expenses from localStorage on component mount
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
    calculateTotal(savedExpenses);
  }, []);

  useEffect(() => {
    // Save expenses to localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    calculateTotal(expenses);
  }, [expenses]);

  const calculateTotal = (expenses) => {
    const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    setTotal(totalAmount);
  };

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="App">
      <header className="text-center p-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <p className="text-xl">Track your expenses and visualize your spending!</p>
      </header>
      <main className="p-6">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <div className="mt-6">
          <h2 className="text-2xl">Total Expenses: ${total.toFixed(2)}</h2>
          <Chart expenses={expenses} />
        </div>
      </main>
    </div>
  );
}

export default App;

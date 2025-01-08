import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

function Chart({ expenses }) {
  const categories = [...new Set(expenses.map(expense => expense.category))];
  const categoryTotals = categories.map(category =>
    expenses
      .filter(expense => expense.category === category)
      .reduce((acc, expense) => acc + expense.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categoryTotals,
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFCC'],
      },
    ],
  };

  return (
    <div className="max-w-lg mx-auto">
      <Pie data={data} />
    </div>
  );
}

export default Chart;

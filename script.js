// Get elements
const incomeForm = document.getElementById('income-form');
const expenseForm = document.getElementById('expense-form');
const incomeList = document.getElementById('income-list');
const expenseList = document.getElementById('expense-list');
const totalIncome = document.getElementById('total-income');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');

// Initialize data
let incomeData = [];
let expenseData = [];

// Add income event listener
incomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('income-amount').value;
    const date = document.getElementById('income-date').value;
    incomeData.push({ amount, date });
    updateIncomeList();
    updateBudget();
});

// Add expense event listener
expenseForm.addEventListener('submit', )
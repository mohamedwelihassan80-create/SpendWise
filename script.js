/**
 * SpendWise - Interactive Dashboard (Week 6)
 */

// =========================================
// 1. COLLECT USER INPUT & STATE
// =========================================
let budgetInput = prompt("Welcome to SpendWise! What is your total monthly budget (in Ksh)?", "50000");
let totalBudget = parseFloat(budgetInput);

if (isNaN(totalBudget) || totalBudget <= 0) {
    totalBudget = 50000;
    alert("Invalid input. We have set your budget to Ksh 50,000.");
}

let expenses = [
    { id: 1, name: "Groceries", amount: 12000, category: "Food" },
    { id: 2, name: "Matatu fare", amount: 3500, category: "Transport" },
    { id: 3, name: "Netflix", amount: 1150, category: "Entertainment" }
];

// =========================================
// 2. DOM ELEMENTS
// =========================================
const form = document.getElementById('expense-form');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const dashboardGrid = document.getElementById('dashboard-cards');
const balanceDisplay = document.getElementById('balance-display');

// =========================================
// 3. FUNCTIONS (Decision Making & Loops)
// =========================================
function calculateTotalRemaining() {
    let totalSpent = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalSpent += expenses[i].amount;
    }
    
    let remaining = totalBudget - totalSpent;
    console.log(`💰 Current Remaining Balance: Ksh ${remaining.toLocaleString()}`);
    return remaining;
}

function renderDashboard() {
    dashboardGrid.innerHTML = '';
    
    const remainingBalance = calculateTotalRemaining();
    balanceDisplay.textContent = `Ksh ${remainingBalance.toLocaleString()}`;
    
    if (remainingBalance < 0) {
        balanceDisplay.style.color = "var(--warning)";
    } else {
        balanceDisplay.style.color = "var(--brand-color)";
    }

    if (expenses.length === 0) {
        dashboardGrid.innerHTML = `<div class="no-expenses"><h3>No expenses yet.</h3><p>Add one above to get started!</p></div>`;
        return;
    }

    expenses.forEach(function(expense) {
        const card = document.createElement('div');
        card.className = 'card';
        card.tabIndex = 0; 
        
        let icon = "💸";
        if (expense.category === "Food") icon = "🍔";
        if (expense.category === "Transport") icon = "🚗";
        if (expense.category === "Rent") icon = "🏠";
        if (expense.category === "Entertainment") icon = "🍿";
        if (expense.category === "Savings") icon = "💰";
        if (expense.category === "Utilities") icon = "💡";

        let statusText = "Standard expense";
        let statusClass = "";
        if (expense.amount > 10000) {
            statusText = "High spending!";
            statusClass = "status-warning";
        } else if (expense.amount < 500) {
            statusText = "Minor purchase";
            statusClass = "status-success";
        }

        card.innerHTML = `
            <div class="card-header">
                <h2>${expense.name}</h2>
                <span class="icon">${icon}</span>
            </div>
            <p class="amount">Ksh ${expense.amount.toLocaleString()}</p>
            <p class="status ${statusClass}">${statusText}</p>
            <button class="delete-btn" data-id="${expense.id}" style="margin-top: auto; background: #ef4444; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer;">
                Delete
            </button>
        `;
        
        // 👇 Notice: The event listener was REMOVED from here 👇
        dashboardGrid.appendChild(card);
    });
}

// =========================================
// 4. HANDLE USER INTERACTIONS
// =========================================
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newName = nameInput.value.trim();
    const newAmount = parseFloat(amountInput.value);
    const newCategory = categoryInput.value;
    
    if (newName === '' || isNaN(newAmount) || newCategory === '') {
        alert('Please fill out all fields correctly.');
        return;
    }
    
    const newExpense = {
        id: Date.now(), 
        name: newName,
        amount: newAmount,
        category: newCategory
    };
    
    expenses.push(newExpense);
    form.reset();
    renderDashboard();
});

// =========================================
// 5. EVENT DELEGATION FOR DELETE (The Fix)
// =========================================
// We attach ONE listener to the parent grid. 
// It "bubbles" up clicks from any delete button inside it.
dashboardGrid.addEventListener('click', function(event) {
    // Check if the element clicked has the 'delete-btn' class
    if (event.target.classList.contains('delete-btn')) {
        // Get the ID from the data-id attribute
        const expenseId = parseInt(event.target.getAttribute('data-id'));
        
        // Remove the expense from the array
        expenses = expenses.filter(function(item) {
            return item.id !== expenseId;
        });
        
        // Re-render the dashboard
        renderDashboard();
        console.log(`Expense ${expenseId} deleted.`);
    }
});

// =========================================
// 6. INITIALIZE APP
// =========================================
renderDashboard();
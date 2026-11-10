/**
 * SpendWise - Interactive Dashboard (Week 6)
 */

// =========================================
// 1. COLLECT USER INPUT & STATE
// =========================================
// Ask the user for their budget using a prompt
let budgetInput = prompt("Welcome to SpendWise! What is your total monthly budget (in Ksh)?", "50000");

// Convert the string input to a number
let totalBudget = parseFloat(budgetInput);

// If the user types a word or clicks cancel, default to 50,000
if (isNaN(totalBudget) || totalBudget <= 0) {
    totalBudget = 50000;
    alert("Invalid input. We have set your budget to Ksh 50,000.");
}

// We store our array of expense objects
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

/**
 * Calculates the remaining balance based on all expenses.
 * Uses a loop to process the array of records.
 */
function calculateTotalRemaining() {
    let totalSpent = 0;
    
    // Process Data with Loops
    for (let i = 0; i < expenses.length; i++) {
        totalSpent += expenses[i].amount;
    }
    
    let remaining = totalBudget - totalSpent;
    
    // LOG THE REMAINING BALANCE TO THE CONSOLE
    console.log(`💰 Current Remaining Balance: Ksh ${remaining.toLocaleString()}`);
    
    return remaining;
}

/**
 * Updates the Dashboard UI dynamically using DOM Manipulation.
 */
function renderDashboard() {
    // Clear the current cards
    dashboardGrid.innerHTML = '';
    
    // Update the total balance at the top
    const remainingBalance = calculateTotalRemaining();
    balanceDisplay.textContent = `Ksh ${remainingBalance.toLocaleString()}`;
    
    // Conditional Logic: Change balance color if over budget
    if (remainingBalance < 0) {
        balanceDisplay.style.color = "var(--warning)";
    } else {
        balanceDisplay.style.color = "var(--brand-color)";
    }

    // If no expenses exist, show an empty state
    if (expenses.length === 0) {
        dashboardGrid.innerHTML = `<div class="no-expenses"><h3>No expenses yet.</h3><p>Add one above to get started!</p></div>`;
        return;
    }

    // Loop through the array and create a card for each expense
    expenses.forEach(function(expense) {
        // Create the card container
        const card = document.createElement('div');
        card.className = 'card';
        card.tabIndex = 0; 
        
        // Determine emoji based on category
        let icon = "💸";
        if (expense.category === "Food") icon = "🍔";
        if (expense.category === "Transport") icon = "🚗";
        if (expense.category === "Rent") icon = "🏠";
        if (expense.category === "Entertainment") icon = "🍿";
        if (expense.category === "Savings") icon = "💰";
        if (expense.category === "Utilities") icon = "💡";

        // Decision Making: Status text based on amount size
        let statusText = "Standard expense";
        let statusClass = "";
        if (expense.amount > 10000) {
            statusText = "High spending!";
            statusClass = "status-warning";
        } else if (expense.amount < 500) {
            statusText = "Minor purchase";
            statusClass = "status-success";
        }

        // Inject the HTML into the card (Notice the new Delete button)
        card.innerHTML = `
            <div class="card-header">
                <h2>${expense.name}</h2>
                <span class="icon">${icon}</span>
            </div>
            <p class="amount">Ksh ${expense.amount.toLocaleString()}</p>
            <p class="status ${statusClass}">${statusText}</p>
            
            <!-- DELETE BUTTON -->
            <button class="delete-btn" data-id="${expense.id}" style="margin-top: auto; background: #ef4444; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer;">
                Delete
            </button>
        `;
        
        // 👇 ADD EVENT LISTENER FOR THE DELETE BUTTON 👇
        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            // Filter out the expense with the matching ID
            expenses = expenses.filter(function(item) {
                return item.id !== expense.id;
            });
            
            // Re-render the dashboard to update the UI and balance
            renderDashboard();
            console.log(`Expense ${expense.id} deleted.`);
        });
        
        // Append the new card to the dashboard grid
        dashboardGrid.appendChild(card);
    });
}

// =========================================
// 4. HANDLE USER INTERACTIONS (Event Listeners)
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
        id: Date.now(), // Generate a unique ID using the current timestamp
        name: newName,
        amount: newAmount,
        category: newCategory
    };
    
    expenses.push(newExpense);
    form.reset();
    renderDashboard();
    console.log("Expense Added. Current Array:", expenses);
});

// =========================================
// 5. INITIALIZE APP
// =========================================
renderDashboard();
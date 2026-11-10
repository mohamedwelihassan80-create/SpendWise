# SpendWise - Interactive Dashboard (Week 6)

This week, SpendWise was transformed from a static visual interface into a fully interactive application using JavaScript. 

## 🚀 Improvements Made This Week
The application now allows users to type in an expense name, amount, and category into a form. When submitted, the dashboard dynamically updates by creating a new visual card for that expense. The total balance at the top of the page also recalculates automatically. If an expense is over a certain amount, the card displays a warning status. 

## 🧠 How the Concepts Were Used

*   **Conditionals:** Used `if / else` statements in two places. First, to determine if the total balance dropped below zero (changing the text color to red/warning). Second, to assign a dynamic `status` to each card based on the amount spent (e.g., amounts over 10,000 display "High spending!").
*   **Arrays:** We store all expense records in a single array named `expenses`. Each item in the array is an object containing the `id`, `name`, `amount`, and `category`. 
*   **Loops:** A `for` loop is used inside `calculateTotalRemaining()` to iterate through the `expenses` array and sum up all the amounts. We also use a `.forEach()` loop to iterate through the array and generate the HTML for every single card on the dashboard.
*   **DOM Updates:** The `renderDashboard()` function clears the old HTML inside the `#dashboard-cards` container and uses `document.createElement()` and `innerHTML` to inject the new data. `textContent` is used to update the total balance at the top.
*   **Events:** We use `form.addEventListener('submit', ...)` to listen for the user clicking the "Add Expense" button. This triggers `event.preventDefault()` to stop the page from reloading, collects the input values, pushes the new object to the array, and calls the render function to update the UI.

## 🛠️ Challenges & Resolutions
*   **Challenge:** When submitting the form, the page was refreshing immediately, losing all data.
*   **Resolution:** I used `event.preventDefault()` inside the submit event listener to stop the default browser behavior.
*   **Challenge:** I needed a way to link the form input to the specific card.
*   **Resolution:** I generated a unique `id` using `Date.now()` when creating the object, ensuring every record is distinct.


# SpendWise Dashboard - Week 5(JavaScript Foundation)

This week, SpendWise transitioned from a purely visual interface into an interactive application using JavaScript. The goal was to build the foundational logic for processing budgeting data. 

## 🚀 What SpendWise Does
SpendWise is a budget tracking dashboard. In this week's iteration, users are prompted to enter their total monthly budget and their total expenses. The application then calculates their remaining balance and outputs a clear, formatted summary to the browser console.

## 🧠 JavaScript Concepts Implemented

### 1. Variables (Storing Application Data)
Variables are used at the top of the script to store static application data:
*   `let userName = "Mohamedweli";` (Stores the user's name for personalized messages).
*   `let currencySymbol = "Ksh";` (Stores the currency format used in the app).

### 2. Collecting User Input
User input is collected using the built-in browser **`prompt()`** function inside the `startBudgeting()` function. 
*   We prompt the user for their budget and expenses.
*   We use `Number()` to convert the string input from the prompt into actual numerical data types so we can do math.
*   We use `isNaN()` to validate that the user actually typed numbers, preventing calculation errors.

### 3. Performing Calculations
The core math happens in the `calculateBalance(budget, expenses)` function. It takes the user's inputs and subtracts expenses from the budget to determine the `remainingBalance`. It also uses conditional `if / else` statements to determine if the user is over, under, or exactly on budget.

### 4. Reusable Functions
The code is organized into three specific, reusable functions to keep it clean and DRY (Don't Repeat Yourself):
*   `calculateBalance(budget, expenses)`: Handles the subtraction logic.
*   `formatCurrency(amount)`: Takes a raw number (like 2500) and returns a formatted string (like "Ksh 2,500") so it is readable.
*   `startBudgeting()`: The main function that triggers the prompts, runs the math, and prints the results.

### 5. Displaying Results
All final calculations are displayed in the browser's **Developer Console** using `console.log()`. The output is clearly labeled with lines, emojis for status (✅, ⚠️, ❌), and formatted numbers so the user can easily understand their financial standing.

## 🛠️ How to Test It
1. Open `index.html` in your browser.
2. Open the Developer Tools Console (`F12` or `Right-Click -> Inspect -> Console`).
3. A prompt will automatically appear asking for your budget.
4. Enter a number (e.g., `50000`).
5. Another prompt will ask for expenses (e.g., `25000`).
6. Look at the Console tab to see the formatted results!
*(You can also click the "+ Calculate New Budget" button in the header to run it again).*






# SpendWise Dashboard Shell - Week 4

This week focused entirely on rebuilding the application's layout using modern CSS architecture. The SpendWise application was transformed into a responsive Dashboard Shell.

## 🚀 Features Built in This Version

*   **Layout (CSS Grid & Flexbox):** Built a Sidebar, Header, and a 6-card grid. Used CSS Grid for the macro layout (Sidebar + Main Content) and the responsive card grid (`repeat(auto-fit, minmax(280px, 1fr))`). Used Flexbox for internal alignment of navigation items, headers, and card content. No absolute positioning was used.
*   **Theming (CSS Variables):** Defined Brand Color, Accent Color, Surface, Primary Text, and Secondary Text in `:root`. **Stretch Goal Achieved:** Implemented a complete Dark Theme using `@media (prefers-color-scheme: dark)` which only overrides the `:root` variables.
*   **Responsive Design:** Added a `768px` media query. On smaller screens, the grid collapses to a single column, the sidebar becomes a top nav, and the header stacks vertically.
*   **Micro-interactions:** Added 200ms `transform` (translateY) and `box-shadow` animations to the dashboard cards. The animation applies on both `:hover` and keyboard `:focus` (using `tabindex="0"` and `:focus-visible`).


# SpendWise - Visual Design Challenge (CSS)- Week 3

In this iteration, the Budget Tracker was completely transformed from a basic structure into a polished, professional user interface using advanced CSS, focusing heavily on the CSS Box Model and visual hierarchy.

## 🎨 Design Choices

### 1. Color Palette
A cohesive, modern palette was implemented using CSS variables (`:root`):
*   **Background:** Soft off-white (`#f4f7f6`) to make the white cards pop.
*   **Primary Text:** Dark slate (`#2d3748`) for high contrast and readability.
*   **Accent Color:** Professional Blue (`#3182ce`) used consistently for buttons, focus rings, and inputs.
*   **Borders:** Light gray (`#e2e8f0`) to define boundaries without being distracting.

### 2. Typography (Google Fonts)
*   **Poppins** (Semi-bold/Bold) is used for all Headings, Table Headers, and Buttons to create a strong, modern visual hierarchy.
*   **Inter** (Regular/Medium) is used for all body text, form inputs, and table data for maximum readability.

### 3. The CSS Box Model (Card Layout)
The page is now organized into distinct visual "cards" (Form, Table, Instructions, and Video). 
*   `margin` creates breathing room between each section.
*   `padding` ensures content inside the cards doesn't touch the edges.
*   `border-radius` (12px) and subtle `box-shadow` give the cards a soft, modern appearance.

### 4. Table & Form Upgrades
*   **Table:** Features a dark slate header, alternating zebra-stripes for the rows, and rounded outer corners using `overflow: hidden`.
*   **Form:** Inputs have generous padding, soft borders, and a blue glow when focused. The submit button matches the theme and reacts on hover.

---





# Budget Tracker - Week 2 (HTML & CSS)

This project is the Week 2 iteration of the Budget Tracker. Building upon the foundational layout from Week 1, this version introduces structured data tables, an upgraded form with dropdowns, multimedia elements, interactive UI components, and advanced CSS styling.

## 🚀 Features Built in This Version

### 1. Expense Table
*   Replaced the basic placeholder text with a fully structured HTML data table.
*   Utilized `<thead>` for headers and `<tbody>` for the data rows.
*   Populated the table with 5 rows of hardcoded sample expense data (Name, Amount, Category, Date).
*   Styled with `border-collapse: collapse`, cell padding, a colored header row, and zebra-striping for readability using `tr:nth-child(even)`.

### 2. Upgraded Add Expense Form
*   Wrapped all input fields inside a proper `<form>` element.
*   Replaced the plain text category input with a `<select>` dropdown containing 5 specific options: Food, Transport, Rent, Entertainment, and Other.
*   Added a "Add Expense" button using `<button type="button">` to intentionally prevent the page from refreshing (this will be handled by JavaScript in a future week).
*   Ensured every input has a clear, matching `id` attribute (e.g., `id="expense-name"`, `id="expense-amount"`) to prepare for Week 6 JavaScript integration.

### 3. Multimedia Content
*   Added a custom logo/icon near the main heading using an `<img>` tag with proper `src`, `alt`, and `width` attributes.
*   Embedded a relevant budgeting tips YouTube video using an `<iframe>` with correctly set width, height, title, and frameborder attributes.

### 4. Interactive Elements
*   Added a collapsible "How to use this tracker" section using the `<details>` and `<summary>` elements.
*   Added `:hover` states to table rows so the background color subtly changes when the user's mouse moves over them.
*   Applied `cursor: pointer` to the submit button for better user experience.

### 5. Advanced CSS Selectors
The `style.css` file utilizes at least three advanced selectors to keep the styling clean and targeted:
*   **Descendant Selector:** `.expenses-section td` (Targets table cells only inside the expenses section).
*   **Direct Child Selector:** `.add-expense-section > form` (Targets the form directly inside the section).
*   **Positional Pseudo-class:** `tr:nth-child(even)` (Creates the alternating row colors in the table).
*   **Negation Pseudo-class:** `input:not([type="submit"])` (Applies styling to all text/number inputs but ignores buttons).
*   **Focus State:** `input:focus` (Adds a glowing border when a user clicks into an input field).

---

## 📂 Project Structure

```text
budget-tracker/
│
├── index.html      # The main HTML structure containing the table, form, and media
├── style.css       # All styling, layout, and advanced CSS selectors
└── README.md       # Project documentation (this file)
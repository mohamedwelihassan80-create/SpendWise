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
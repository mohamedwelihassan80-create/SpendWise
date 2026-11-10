# SpendWise Dashboard Shell - Week 4

This week focused entirely on rebuilding the application's layout using modern CSS architecture. The SpendWise application was transformed into a responsive Dashboard Shell.

## 🚀 Features Built in This Version

*   **Layout (CSS Grid & Flexbox):** Built a Sidebar, Header, and a 6-card grid. Used CSS Grid for the macro layout (Sidebar + Main Content) and the responsive card grid (`repeat(auto-fit, minmax(280px, 1fr))`). Used Flexbox for internal alignment of navigation items, headers, and card content. No absolute positioning was used.
*   **Theming (CSS Variables):** Defined Brand Color, Accent Color, Surface, Primary Text, and Secondary Text in `:root`. **Stretch Goal Achieved:** Implemented a complete Dark Theme using `@media (prefers-color-scheme: dark)` which only overrides the `:root` variables.
*   **Responsive Design:** Added a `768px` media query. On smaller screens, the grid collapses to a single column, the sidebar becomes a top nav, and the header stacks vertically.
*   **Micro-interactions:** Added 200ms `transform` (translateY) and `box-shadow` animations to the dashboard cards. The animation applies on both `:hover` and keyboard `:focus` (using `tabindex="0"` and `:focus-visible`).


# SpendWise - Visual Design Challenge (CSS)

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
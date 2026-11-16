# 🌟 GitHub Issues Tracker

A responsive GitHub Issues Tracker built with **HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript**. The application consumes REST APIs to fetch, filter, search, and display GitHub-style issues with detailed issue information in a modal.

🔗 **Live Site:** [(https://github-issue-traackerr.netlify.app/)]
🔗 **GitHub Repository:** [https://github.com/infapk02/github-issue-tracker]

---

## 📌 Project Overview

GitHub Issues Tracker is a frontend web application that allows users to browse and manage issue information through a clean and responsive interface.

The application provides:

- Admin login authentication
- All issues listing
- Open issues filtering
- Closed issues filtering
- Issue search functionality
- Issue count display
- Issue status indicators
- Priority indicators
- Issue labels
- Detailed issue modal
- Loading spinner during API requests
- Responsive layout for different screen sizes
- Active tab/category indication
- REST API integration

The project is built entirely with **Vanilla JavaScript** without using any frontend framework.

---

## ✨ Features

### 🔐 Authentication

- Admin login page
- Default demo credentials provided
- Username and password validation
- Simple login flow before accessing the main application

### 📋 Issue Management

- Fetches all issues from the provided REST API
- Displays issues in a responsive card-based layout
- Shows issue title, description, status, author, priority, labels, and creation date
- Displays issue details inside a modal
- Supports individual issue API requests

### 🔎 Search

Users can search issues by:

- Issue title
- Issue description

Search results are dynamically updated based on the entered search text.

### 🏷️ Issue Filtering

Issues can be filtered by status:

- **All**
- **Open**
- **Closed**

The selected category is visually highlighted using an active button state.

### 🎨 Dynamic UI

The interface dynamically changes based on issue data.

For example:

- Open issues → Green top border
- Closed issues → Purple top border
- High priority → Red indicator
- Medium priority → Yellow indicator
- Low priority → Gray indicator

### ⏳ Loading State

A loading spinner is displayed while data is being fetched from the API.

This provides visual feedback to users and improves the overall user experience during asynchronous operations.

### 📱 Responsive Design

The application is designed to work across:

- Desktop
- Tablet
- Mobile

The issue cards automatically adapt to different screen sizes.

---

## 🛠️ Technologies Used

| Technology         | Purpose               |
| ------------------ | --------------------- |
| HTML5              | Application structure |
| Tailwind CSS       | Utility-based styling |
| DaisyUI            | UI components         |
| Vanilla JavaScript | Application logic     |
| Fetch API          | API communication     |
| REST API           | Issue data source     |
| Font Awesome       | Icons                 |
| Netlify            | Deployment            |

---

## 🔗 API Endpoints

The application uses the following API endpoints.

### Get All Issues

```text
https://phi-lab-server.vercel.app/api/v1/lab/issues
```

### Get Single Issue

```text
https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}
```

Example:

```text
https://phi-lab-server.vercel.app/api/v1/lab/issue/33
```

### Search Issues

```text
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}
```

Example:

```text
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications
```

---

## 🔐 Demo Credentials

Use the following credentials to access the application:

```text
Username: admin
Password: admin123
```

---

## 📂 Project Structure

```text
github-issues-tracker/
│
├── index.html
├── login.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
|   └── home.js
│
├── assets/
│   └── images/
│
├── README.md
└── ...
```

> The exact folder structure may vary depending on the final project organization.

---

## ⚙️ How It Works

### 1. Login

The user first enters the demo admin credentials.

```text
Username: admin
Password: admin123
```

After successful authentication, the user can access the main Issues Tracker.

### 2. Fetch Issues

The application requests issue data from the REST API using the JavaScript `fetch()` API.

```javascript
fetch(API_URL);
```

The received data is then stored and rendered dynamically.

### 3. Display Issues

Each issue is converted into a card containing:

- Title
- Description
- Status
- Author
- Priority
- Labels
- Created date

### 4. Filter Issues

Users can switch between:

```text
All
Open
Closed
```

The displayed issues are filtered according to their current status.

### 5. Search Issues

The search field allows users to find relevant issues by matching the search text against issue titles and descriptions.

### 6. View Issue Details

Clicking an issue card fetches the individual issue information and displays the complete details inside a modal.

### 7. Loading State

While API data is being fetched, a loading spinner is displayed to inform the user that the application is processing the request.

---

## 🔄 Application Flow

```text
User Opens Website
        ↓
Login Page
        ↓
Enter Admin Credentials
        ↓
Main Issues Tracker
        ↓
Fetch Issues API
        ↓
Loading Spinner
        ↓
Issues Loaded
        ↓
Display Issue Cards
        ↓
 ┌──────────┬──────────┬──────────┐
 │   All    │   Open   │  Closed  │
 └──────────┴──────────┴──────────┘
        ↓
Search / Filter
        ↓
Click Issue Card
        ↓
Fetch Single Issue
        ↓
Show Modal
```

---

## 🎯 Core JavaScript Concepts Used

This project demonstrates practical usage of several important JavaScript concepts:

- Variables
- Functions
- Arrays
- Objects
- Array methods
- `fetch()`
- Promises
- `.then()`
- `.catch()`
- DOM manipulation
- Event listeners
- Template literals
- Conditional rendering
- Filtering
- Search functionality
- Dynamic HTML generation
- API integration
- Asynchronous JavaScript

---

## 🔍 Search & Filter Logic

The application combines both status filtering and search functionality.

For example:

```javascript
const matchesStatus = currentStatus === "all" || issue.status === currentStatus;

const matchesSearch =
  issue.title.toLowerCase().includes(searchText) || issue.description.toLowerCase().includes(searchText);
```

An issue is displayed only when it satisfies both conditions.

```text
Status Match
      +
Search Match
      ↓
Display Issue
```

---

## ⏳ Loading State

The application provides a loading state while waiting for API responses.

Example:

```javascript
const showLoadingSpinner = () => {
  issueContainer.innerHTML = `
    <div class="flex justify-center items-center py-20">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  `;
};
```

This prevents the interface from appearing unresponsive while data is being loaded.

---

## 📱 Responsive Design

The UI follows a responsive layout approach so that users can access the application comfortably on different devices.

### Desktop

- Multi-column issue grid
- Full navigation layout
- Spacious cards

### Tablet

- Reduced column count
- Flexible content spacing

### Mobile

- Single-column issue cards
- Responsive search section
- Mobile-friendly modal
- Flexible navigation and controls

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Navigate to the project

```bash
cd github-issues-tracker
```

### Run the project

Because this is a Vanilla JavaScript project, you can open `index.html` directly in a browser.

For a better development experience, use the **Live Server** extension in VS Code.

---

## 🌐 Deployment

The project is deployed using **Netlify**.

### Deployment Process

```text
Local Development
       ↓
Git
       ↓
GitHub Repository
       ↓
Netlify
       ↓
Live Website
```

Every major project update can be pushed to GitHub and redeployed through Netlify.

---

## 📊 Project Requirements Completed

| Requirement            | Status       |
| ---------------------- | ------------ |
| Login Page             | ✅ Completed |
| Admin Credentials      | ✅ Completed |
| Navbar                 | ✅ Completed |
| Search                 | ✅ Completed |
| All Issues             | ✅ Completed |
| Open Issues            | ✅ Completed |
| Closed Issues          | ✅ Completed |
| Issue Cards            | ✅ Completed |
| Issue Details          | ✅ Completed |
| Modal                  | ✅ Completed |
| Loading Spinner        | ✅ Completed |
| Active Category Button | ✅ Completed |
| Responsive Design      | ✅ Completed |
| API Integration        | ✅ Completed |
| GitHub Commits         | ✅ Completed |
| README                 | ✅ Completed |
| Netlify Deployment     | ✅ Completed |

---

## 🧠 README Questions

### 1. What is the difference between `var`, `let`, and `const`?

`var`, `let`, and `const` are used to declare variables in JavaScript, but they behave differently.

**`var`**

- Function scoped
- Can be redeclared
- Can be reassigned

```javascript
var name = "John";
var name = "David";
```

**`let`**

- Block scoped
- Cannot be redeclared within the same scope
- Can be reassigned

```javascript
let age = 20;
age = 21;
```

**`const`**

- Block scoped
- Cannot be redeclared
- Cannot be reassigned

```javascript
const country = "Bangladesh";
```

In modern JavaScript, `let` and `const` are generally preferred over `var`.

---

### 2. What is the spread operator (`...`)?

The spread operator is represented by three dots:

```javascript
...
```

It is used to expand the elements of an array or properties of an object.

Example:

```javascript
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
```

Output:

```text
[1, 2, 3, 4, 5]
```

It is commonly used to copy or combine arrays and objects.

---

### 3. What is the difference between `map()`, `filter()`, and `forEach()`?

These are array methods, but they serve different purposes.

### `map()`

`map()` creates a **new array** by transforming every element.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(function (number) {
  return number * 2;
});
```

Result:

```text
[2, 4, 6]
```

### `filter()`

`filter()` creates a **new array** containing only the elements that satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
```

Result:

```text
[2, 4]
```

### `forEach()`

`forEach()` executes a function for every element but does **not create a new array**.

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});
```

In simple terms:

```text
map()
→ transform data
→ returns a new array

filter()
→ select specific data
→ returns a new array

forEach()
→ perform an action
→ does not return a new array
```

---

### 4. What is an arrow function?

An arrow function is a shorter syntax for writing functions in JavaScript.

Traditional function:

```javascript
function add(a, b) {
  return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
  return a + b;
};
```

For a single expression, it can be even shorter:

```javascript
const add = (a, b) => a + b;
```

Arrow functions are commonly used with array methods and asynchronous JavaScript.

---

### 5. What are template literals?

Template literals are a way of creating strings using backticks:

```javascript
`
`;
```

They allow variables and expressions to be inserted directly inside a string using:

```javascript
${}
```

Example:

```javascript
const name = "Deepo";

const message = `Hello, ${name}!`;

console.log(message);
```

Output:

```text
Hello, Deepo!
```

Template literals are especially useful when generating dynamic HTML.

For example:

```javascript
const issue = {
  title: "Fix login bug",
};

const html = `
  <div>
    <h2>${issue.title}</h2>
  </div>
`;
```

This makes dynamic HTML easier to write and read.

---

## 🔮 Future Improvements

Some possible improvements for future versions:

- Real authentication system
- User registration
- Create new issues
- Edit existing issues
- Delete issues
- Pagination
- Advanced filtering
- Debounced search
- Dark mode
- Toast notifications
- Better error handling
- Persistent authentication
- Backend integration
- Database support

---

## 👨‍💻 Author

**Infa Ahmed Deepo**

Frontend / MERN Stack Developer

### Technologies & Interests

- HTML
- CSS
- Tailwind CSS
- JavaScript
- React
- Node.js
- Express.js
- MongoDB

---

## ⭐ Acknowledgement

This project was developed as part of **Programming Hero Assignment Task** to practice frontend development, REST API integration, JavaScript DOM manipulation, asynchronous programming, filtering, searching, and responsive UI development.

If you find this project useful, feel free to ⭐ the repository.

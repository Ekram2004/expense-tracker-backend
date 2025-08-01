# 💰 Expense Tracker Backend

A simple RESTful API built with Node.js, Express, and MongoDB to manage expenses. This project is part of a full-stack expense tracking application.

## 📦 Features

- Add new expenses
- Get a list of all expenses
- Delete an expense
- MongoDB for data storage
- Environment variables support via `.env`

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB (local or cloud like MongoDB Atlas)
- Postman (for API testing)

### Installation

1. **Clone the repo:**

```bash
git clone https://github.com/<your-username>/expense-tracker-backend.git
cd expense-tracker-backend

Install dependencies:
npm install

Configure environment variables:

Create a .env file in the root directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the server:
npm start
Server should run on http://localhost:5000
5000

📮 API Endpoints
Method	Endpoint	Description
GET	/api/expenses	Get all expenses
POST	/api/expenses	Add a new expense
DELETE	/api/expenses/:id	Delete an expense

expense

🧪 Testing with Postman
Start your server

Open Postman and hit the endpoints listed above

Use POST with JSON like:

json
Copy code
{
  "title": "Groceries",
  "amount": 100
}


📂 Project Structure
.
├── config/
│   └── db.js
├── controllers/
│   └── expenseController.js
├── models/
│   └── Expense.js
├── routes/
│   └── expenseRoutes.js
├── .env
├── .gitignore
├── server.js
└── README.md

 Author
Ekram Asrar – 




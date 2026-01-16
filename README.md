# Multi-Tenant Sales Dashboard

This project is a SaaS-style multi-tenant sales dashboard built using React and the Context API.

The purpose of this project is to demonstrate how a single application can support multiple organizations (tenants) while maintaining proper data separation and role-based access, similar to real-world CRM systems.

The dashboard allows users to view sales statistics, manage leads, and review call logs. Different user roles such as Admin and Agent are handled at the UI level to simulate real business workflows.

---

## Project Objective

The main objective of this project is to:

- Simulate a multi-tenant CRM dashboard on the frontend
- Demonstrate role-based access control
- Practice global state management using React Context API
- Build a clean and scalable React project structure
- Create a portfolio-ready SaaS-style application

---

## Features

- Multi-tenant support with organization switching
- Role-based access control  
  - Admin users can update lead status  
  - Agent users have read-only access
- Dashboard statistics  
  - Total leads  
  - Total calls  
  - Converted leads
- Lead management with status and priority
- Search leads by name or phone number
- Filter leads based on lead status
- Clean and responsive SaaS-style user interface
- Centralized state management using Context API

---

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- React Context API
- CSS (custom styling, no external UI libraries)
- Git and GitHub for version control

---

## Project Structure
src/
├── components/
│ ├── Header.jsx
│ ├── Stats.jsx
│ ├── Leads.jsx
│ └── CallLogs.jsx
├── context/
│ └── AppContext.jsx
├── data/
│ └── mockData.js
├── App.jsx
├── App.css
└── main.jsx


---

## How the Application Works

The application uses React Context API to manage global state such as the selected tenant, user role, leads data, and call logs.

When a user switches an organization, all related data updates automatically across the dashboard.

Role-based logic ensures that only Admin users can update lead status, while Agent users can only view the data.

Mock data is used to simulate backend API responses, making the project easy to extend with a real backend in the future.

---

## Getting Started

### 1. Clone the repository
git clone https://github.com/Sajalgupta3/multi-tenant-sales-dashboard.git
### 2. Navigate to the project directory
cd multi-tenant-sales-dashboard
### 3. Install dependencies
npm install
### 4. Run the development server
npm run dev
### The application will run locally at:
http://localhost:5173

---

---

## Learning Outcomes

- Understanding multi-tenant architecture at the frontend level
- Implementing role-based UI logic in React
- Using Context API for global state management
- Designing scalable React component structures
- Building a real-world SaaS-style dashboard

---

## Future Improvements

- User authentication and authorization
- Backend integration using Node.js and MongoDB
- REST APIs for leads and call logs
- Charts and analytics dashboards
- Deployment to a cloud platform such as Vercel or Netlify

---

## Author

Sajal Gupta  
Frontend Developer (React)

---

## License

This project is created for learning, academic, and portfolio purposes.

---

## Final Step

After updating the README file, run the following commands:

```bash
git add README.md
git commit -m "Complete project README"
git push

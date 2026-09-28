# Eye-Reporta 👁️

**See it. Report it. Document it.**

Eye-Reporta is a web-based incident reporting and documentation platform that allows people to document incidents they witness, submit supporting evidence, and track the status of their reports.

The platform is designed to provide a structured way to record incidents while maintaining reporter privacy and a clear review process.

## 🚧 Project Status

**In Development**

Eye-Reporta is currently being developed as a React.js project. Features and architecture are subject to change as development progresses.

## 🎯 MVP Goals

The first version of Eye-Reporta will focus on:

* User registration and authentication
* Incident reporting
* Evidence uploads
* Incident location and timestamps
* Report status tracking
* Public report discovery
* Search and filtering
* Reporter dashboard
* Moderation and review workflow
* In-app notifications

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Bootstrap
* JavaScript

### Planned Backend

* Node.js
* Express.js
* PostgreSQL
* REST API

## 📁 Project Structure

```text
src/
├── assets/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── services/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Perfected1/eye-reporta.git
```

Enter the project directory:

```bash
cd eye-reporta
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🧭 Planned Application Structure

```text
Eye-Reporta
│
├── Public
│   ├── Home
│   ├── Reports
│   └── Report Details
│
├── Reporter
│   ├── Submit Report
│   ├── My Reports
│   └── Notifications
│
└── Administration
    ├── Dashboard
    ├── Review Reports
    └── Moderation
```

## 🔐 Privacy & Moderation

Eye-Reporta is designed with reporter privacy and responsible moderation in mind.

Reports submitted to the platform will go through a defined review process before being published publicly. A reporter's personal account information should not automatically be exposed on a public report.

The platform will also maintain moderation records to provide an audit trail of actions taken on submitted reports.

## 📌 Development Roadmap

* [x] React + Vite setup
* [x] Bootstrap integration
* [x] React Router setup
* [ ] Application layout
* [ ] Landing page
* [ ] Reports interface
* [ ] Report submission form
* [ ] Authentication
* [ ] Reporter dashboard
* [ ] Admin dashboard
* [ ] Backend API
* [ ] PostgreSQL database
* [ ] Evidence management
* [ ] Moderation workflow
* [ ] Notifications
* [ ] Deployment

## 👨‍💻 Development

Eye-Reporta is being developed incrementally with a focus on learning, maintainable architecture, and practical software engineering principles.

## 📄 License

License information will be added as the project develops.

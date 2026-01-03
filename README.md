# LawCap - Lawyer Appointment Booking System

LawCap is a web application designed to simplify the process of finding and booking appointments with lawyers. It provides a user-friendly interface for browsing legal professionals by specialty, viewing their profiles, and managing appointments.

## 🚀 Features

- **Browse Lawyers**: View a comprehensive list of lawyers and filter them by their legal specialty.
- **Lawyer Profiles**: detailed information about each lawyer, including experience, fees, and bio.
- **Appointment Booking**: Easy-to-use booking system for scheduling consultations.
- **User Dashboard**:
  - **My Appointments**: Track upcoming and past appointments.
  - **My Profile**: Manage user details and preferences.
- **Authentication**: Secure login and signup functionality.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 📂 Project Structure

```
LawCap/
├── frontend/             # React frontend application
│   ├── public/           # Public assets
│   ├── src/
│   │   ├── assets/       # Images and static files
│   │   ├── components/   # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── pages/        # Application pages (Home, Lawyers, Login, etc.)
│   │   ├── context/      # Context API for state management
│   │   ├── main.jsx      # Entry point
│   │   └── App.jsx       # Main application component
│   └── package.json      # Dependencies and scripts
└── README.md             # Project documentation
```

## 🏁 Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/lawcap.git
   cd LawCap
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

---

Developed for Internship Project.

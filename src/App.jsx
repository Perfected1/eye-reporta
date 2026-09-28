import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Reports from "./pages/Reports"
import ReportDetails from "./pages/ReportDetails"
import SubmitReport from "./pages/SubmitReport"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"

import PublicLayout from "./layouts/PublicLayout"

function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/reports/:id" element={<ReportDetails />} />

          <Route path="/report" element={<SubmitReport />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  )
}

export default App
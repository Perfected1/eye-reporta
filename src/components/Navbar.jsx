import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link
          to="/"
          className="navbar-brand fw-bold"
        >
          Eye-Reporta
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/reports"
                className="nav-link"
              >
                Reports
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className="nav-link"
                  >
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item ms-lg-2">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item ms-lg-2">
                  <Link
                    to="/register"
                    className="btn btn-primary btn-sm"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    const user = {
      name: name,
      email: email
    }

    login(user)

    navigate("/dashboard")
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6 col-lg-5">

          <div className="card shadow-sm">

            <div className="card-body p-4">

              <h1 className="fw-bold mb-2">
                Create an Account
              </h1>

              <p className="text-muted mb-4">
                Create an Eye-Reporta account to submit and manage reports.
              </p>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    required
                  />

                </div>

                <div className="mb-3">

                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />

                </div>

                <div className="mb-3">

                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    required
                    minLength="6"
                  />

                </div>

                <div className="mb-4">

                  <label
                    htmlFor="confirmPassword"
                    className="form-label"
                  >
                    Confirm password
                  </label>

                  <input
                    id="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    required
                    minLength="6"
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Create Account
                </button>

              </form>

              <p className="text-center text-muted mt-4 mb-0">
                Already have an account?{" "}
                <Link to="/login">
                  Login
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register
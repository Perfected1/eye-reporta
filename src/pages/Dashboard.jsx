import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Dashboard() {
  const { user } = useAuth()

  const reports = [
    {
      id: 1,
      title: "Flooding on Allen Avenue",
      category: "Environment",
      status: "Published",
      date: "September 26, 2026"
    },
    {
      id: 2,
      title: "Traffic Light Malfunction",
      category: "Infrastructure",
      status: "Under Review",
      date: "September 25, 2026"
    },
    {
      id: 3,
      title: "Road Accident",
      category: "Accident",
      status: "Draft",
      date: "September 24, 2026"
    }
  ]

  const totalReports = reports.length

  const publishedReports = reports.filter(
    (report) => report.status === "Published"
  ).length

  const underReviewReports = reports.filter(
    (report) => report.status === "Under Review"
  ).length

  const draftReports = reports.filter(
    (report) => report.status === "Draft"
  ).length

  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h1 className="fw-bold mb-1">
            Dashboard
          </h1>

          <p className="text-muted mb-0">
            Welcome back, {user?.name}.
          </p>
        </div>

        <Link
          to="/report"
          className="btn btn-primary"
        >
          Submit a Report
        </Link>

      </div>

      <div className="row g-4 mb-5">

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Total Reports
              </p>

              <h2 className="fw-bold mb-0">
                {totalReports}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Published
              </p>

              <h2 className="fw-bold text-success mb-0">
                {publishedReports}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Under Review
              </p>

              <h2 className="fw-bold text-warning mb-0">
                {underReviewReports}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Drafts
              </p>

              <h2 className="fw-bold text-secondary mb-0">
                {draftReports}
              </h2>
            </div>
          </div>
        </div>

      </div>

      <div className="card shadow-sm">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h2 className="h4 fw-bold mb-0">
              Recent Reports
            </h2>

            <Link
              to="/dashboard/reports"
              className="btn btn-outline-primary btn-sm"
            >
              View All
            </Link>

          </div>

          <div className="table-responsive">

            <table className="table align-middle mb-0">

              <thead>
                <tr>
                  <th>Report</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>

                {reports.map((report) => (

                  <tr key={report.id}>

                    <td>
                      <Link
                        to={`/reports/${report.id}`}
                        className="fw-semibold text-decoration-none"
                      >
                        {report.title}
                      </Link>
                    </td>

                    <td>
                      {report.category}
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          report.status === "Published"
                            ? "text-bg-success"
                            : report.status === "Under Review"
                            ? "text-bg-warning"
                            : "text-bg-secondary"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>

                    <td>
                      {report.date}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard
import { Link, useParams } from "react-router-dom"
import { getReportById } from "../services/reportService"

const reports = [
  {
    id: 1,
    title: "Flooding on Allen Avenue",
    category: "Environment",
    location: "Ikeja, Lagos",
    date: "September 26, 2026",
    status: "Published",
    description:
      "Heavy rainfall resulted in significant flooding along parts of Allen Avenue."
  },
  {
    id: 2,
    title: "Traffic Light Malfunction",
    category: "Infrastructure",
    location: "Yaba, Lagos",
    date: "September 25, 2026",
    status: "Published",
    description:
      "A traffic signal was reportedly malfunctioning at a busy intersection."
  },
  {
    id: 3,
    title: "Road Accident",
    category: "Accident",
    location: "Lekki, Lagos",
    date: "September 24, 2026",
    status: "Under Review",
    description:
      "A road accident was reported during the morning commute."
  }
]

function ReportDetails() {
  const { id } = useParams()

const report = getReportById(id)
 
  if (!report) {
    return (
      <div className="container py-5">
        <h1 className="fw-bold">Report Not Found</h1>

        <p className="text-muted">
          The report you are looking for does not exist.
        </p>

        <Link to="/reports" className="btn btn-primary">
          Back to Reports
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-5">

      <Link to="/reports" className="btn btn-outline-secondary mb-4">
        ← Back to Reports
      </Link>

      <div className="row">

        <div className="col-lg-8">

          <span className="badge bg-secondary mb-3">
            {report.category}
          </span>

          <h1 className="fw-bold mb-3">
            {report.title}
          </h1>

          <div className="mb-4">
            <p className="text-muted mb-2">
              📍 {report.location}
            </p>

            <p className="text-muted mb-2">
              🕐 {report.date}
            </p>

            <span
              className={
                report.status === "Published"
                  ? "badge bg-success"
                  : "badge bg-warning text-dark"
              }
            >
              {report.status}
            </span>
          </div>

          <hr />

          <h4 className="fw-bold mt-4">
            Description
          </h4>

          <p className="mt-3">
            {report.description}
          </p>

        </div>

      </div>
    </div>
  )
}

export default ReportDetails
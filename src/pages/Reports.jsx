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

function Reports() {
  return (
    <div className="container py-5">

      {/* Page Header */}
      <div className="row mb-5">
        <div className="col-lg-8">
          <h1 className="fw-bold">
            Reports
          </h1>

          <p className="text-muted">
            Browse incidents documented through Eye-Reporta.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search reports..."
          />
        </div>
      </div>

      {/* Reports */}
      <div className="row g-4">

        {reports.map((report) => (
          <div className="col-md-6 col-lg-4" key={report.id}>

            <div className="card h-100">

              <div className="card-body">

                <div className="d-flex justify-content-between align-items-start mb-3">

                  <span className="badge bg-secondary">
                    {report.category}
                  </span>

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

                <h5 className="card-title fw-bold">
                  {report.title}
                </h5>

                <p className="text-muted small mb-2">
                  📍 {report.location}
                </p>

                <p className="text-muted small">
                  🕐 {report.date}
                </p>

                <p className="card-text">
                  {report.description}
                </p>

                <a
                  href={`/reports/${report.id}`}
                  className="btn btn-outline-primary"
                >
                  View Report
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Reports
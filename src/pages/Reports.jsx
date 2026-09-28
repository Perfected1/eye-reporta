import { useState } from "react"
import { Link } from "react-router-dom"
import { getReports } from "../services/reportService"

function Reports() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const reports = getReports()

  const filteredReports = reports.filter((report) => {

    const searchTerm = search.toLowerCase()

    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm) ||
      report.category.toLowerCase().includes(searchTerm) ||
      report.location.toLowerCase().includes(searchTerm) ||
      report.description.toLowerCase().includes(searchTerm)

    const matchesCategory =
      category === "All" || report.category === category

    return matchesSearch && matchesCategory
  })

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

      {/* Search and Filter */}
      <div className="row g-3 mb-4">

        <div className="col-lg-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search reports..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="col-lg-4">
          <select
            className="form-select form-select-lg"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Environment">Environment</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Accident">Accident</option>
          </select>
        </div>

      </div>

      {/* Results Count */}
      <p className="text-muted mb-4">
        {filteredReports.length} report
        {filteredReports.length !== 1 ? "s" : ""} found
      </p>

      {/* Reports */}
      <div className="row g-4">

        {filteredReports.length > 0 ? (

          filteredReports.map((report) => (
            <div
              className="col-md-6 col-lg-4"
              key={report.id}
            >

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

                  <Link
                    to={`/reports/${report.id}`}
                    className="btn btn-outline-primary"
                  >
                    View Report
                  </Link>

                </div>

              </div>

            </div>
          ))

        ) : (

          <div className="col-12">
            <div className="alert alert-light border">
              No reports found matching your filters.
            </div>
          </div>

        )}

      </div>

    </div>
  )
}

export default Reports
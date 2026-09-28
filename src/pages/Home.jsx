function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="text-uppercase fw-semibold mb-3">
                Eye-Reporta
              </p>

              <h1 className="display-3 fw-bold">
                See it. Report it. Document it.
              </h1>

              <p className="lead mt-4">
                A platform for documenting incidents you witness,
                preserving supporting evidence, and creating a
                structured public record.
              </p>

              <div className="d-flex gap-3 mt-4">
                <a href="/report" className="btn btn-primary btn-lg">
                  Report an Incident
                </a>

                <a
                  href="/reports"
                  className="btn btn-outline-light btn-lg"
                >
                  Explore Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold">How Eye-Reporta Works</h2>

            <p className="text-muted">
              A simple process for documenting what you witness.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-center">
                <h3>01</h3>
                <h5 className="fw-bold">Witness</h5>
                <p className="text-muted">
                  See an incident or situation that should be documented.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center">
                <h3>02</h3>
                <h5 className="fw-bold">Report</h5>
                <p className="text-muted">
                  Submit a structured account of what you witnessed.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center">
                <h3>03</h3>
                <h5 className="fw-bold">Review</h5>
                <p className="text-muted">
                  Reports go through a review process before publication.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center">
                <h3>04</h3>
                <h5 className="fw-bold">Document</h5>
                <p className="text-muted">
                  Published reports become part of a searchable record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eye-Reporta */}
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold">Structured Reports</h4>

                  <p className="text-muted">
                    Capture incidents with consistent information
                    including time, location, description, and category.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold">Supporting Evidence</h4>

                  <p className="text-muted">
                    Attach photos and videos to provide additional
                    context to a submitted report.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold">Privacy & Review</h4>

                  <p className="text-muted">
                    Reporter information can remain private while
                    submissions go through a review workflow.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container py-5 text-center">
          <h2 className="fw-bold">
            Witness something worth documenting?
          </h2>

          <p className="text-muted mt-3">
            Create a report and help build a structured record.
          </p>

          <a href="/report" className="btn btn-primary btn-lg mt-3">
            Report an Incident
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
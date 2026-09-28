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

export function getReports() {
  return reports
}

export function getReportById(id) {
  return reports.find(
    (report) => report.id === Number(id)
  )
}
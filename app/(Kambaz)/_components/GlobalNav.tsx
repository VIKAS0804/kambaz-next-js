import Link from "next/link";

export default function GlobalNav() {
  return (
    <aside
      style={{
        width: 220,
        minHeight: "100vh",
        borderRight: "1px solid #eee",
        padding: "16px 12px",
        position: "sticky",
        top: 0,
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          <li>
            <a id="wd-neu-link" href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
              NEU
            </a>
          </li>
          <li><Link id="wd-account-link" href="/Account/Signin">Account</Link></li>
          <li><Link id="wd-dashboard-link" href="/Dashboard">Dashboard</Link></li>
          <li><Link id="wd-course-link" href="/Courses/CS5610">Course</Link></li>
          <li><Link id="wd-calendar-link" href="/Calendar">Calendar</Link></li>
          <li><Link id="wd-inbox-link" href="/Inbox">Inbox</Link></li>
          <li><Link id="wd-labs-link" href="/Labs">Labs</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

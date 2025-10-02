export default function CourseHome({ params }: { params: { cid: string } }) {
    return (
      <div>
        <h1>{params.cid} — Home</h1>
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button>Import</button>
          <button>View Course Stream</button>
          <button>New Announcement</button>
        </div>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
          <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
            <h3>Course Status</h3>
            <p>Published</p>
            <button>Unpublish</button>
          </div>
          <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
            <h3>Modules</h3>
            <ul>
              <li>Module 1 — Intro</li>
              <li>Module 2 — Basics</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
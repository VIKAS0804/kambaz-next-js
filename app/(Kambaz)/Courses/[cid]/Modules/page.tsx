export default function Modules({ params }: { params: { cid: string } }) {
    return (
      <div>
        <h1>{params.cid} — Modules</h1>
        <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
          <h3>Module 1: Getting Started</h3>
          <ul>
            <li>Lesson 1.1 — Syllabus</li>
            <li>Lesson 1.2 — Tools</li>
          </ul>
        </div>
        <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 8, marginTop: 12 }}>
          <h3>Module 2: Fundamentals</h3>
          <ul>
            <li>Lesson 2.1 — HTML Basics</li>
            <li>Lesson 2.2 — CSS Basics</li>
          </ul>
        </div>
      </div>
    );
  }
  
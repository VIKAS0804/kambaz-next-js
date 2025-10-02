import Link from "next/link";

export default function Assignments({ params }: { params: { cid: string } }) {
  const base = `/Courses/${params.cid}/Assignments`;
  const items = [{ id: "a1", name: "Assignment 1" }, { id: "a2", name: "Assignment 2" }];

  return (
    <div>
      <h1>{params.cid} — Assignments</h1>
      <input placeholder="Search assignments..." />
      <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
        <button>+ Group</button>
        <button>+ Assignment</button>
      </div>

      <h2>Assignments</h2>
      <ul>
        {items.map(i => (
          <li key={i.id}><Link href={`${base}/${i.id}/edit`}>{i.name}</Link></li>
        ))}
      </ul>

      <h2>Quizzes</h2><ul><li>Quiz 1</li></ul>
      <h2>Exams</h2><ul><li>Midterm</li></ul>
      <h2>Project</h2><ul><li>Final Project</li></ul>
    </div>
  );
}

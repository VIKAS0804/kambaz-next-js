"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseSidebar({ cid }: { cid: string }) {
  const base = `/Courses/${cid}`;
  const p = usePathname();
  const links = [
    { href: `${base}`, label: "Home" },
    { href: `${base}/Modules`, label: "Modules" },
    { href: `${base}/Piazza`, label: "Piazza" },
    { href: `${base}/Zoom`, label: "Zoom" },
    { href: `${base}/Quizzes`, label: "Quizzes" },
    { href: `${base}/Assignments`, label: "Assignments" },
    { href: `${base}/Grades`, label: "Grades" },
  ];
  return (
    <aside style={{ width: 220, borderRight: "1px solid #eee", paddingRight: 16 }}>
      <h3>Course</h3>
      {links.map(l => (
        <div key={l.href} style={{ marginBottom: 8 }}>
          <Link href={l.href} className={p === l.href ? "active" : ""}>{l.label}</Link>
        </div>
      ))}
    </aside>
  );
}

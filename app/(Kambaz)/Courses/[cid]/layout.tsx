import CourseSidebar from "../_components/CourseSidebar";

export default function CourseLayout({ children, params }: { children: React.ReactNode; params: { cid: string } }) {
  return (
    <div style={{ display: "flex", gap: 16, padding: 16 }}>
      <CourseSidebar cid={params.cid} />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}

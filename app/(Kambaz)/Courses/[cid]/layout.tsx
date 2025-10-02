import CourseSidebar from "../_components/CourseSidebar";

export default async function CourseLayout(
  { children, params }: { children: React.ReactNode; params: Promise<{ cid: string }> }
) {
  await params; // or const { cid } = await params;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr" }}>
      <aside style={{ borderRight: "1px solid #eee", padding: 12 }}><CourseSidebar cid={""} /></aside>
      <main style={{ padding: 16 }}>{children}</main>
    </div>
  );
}

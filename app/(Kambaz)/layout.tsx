import GlobalNav from "./_components/GlobalNav";

export default function KambazLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "100vh" }}>
      <GlobalNav />
      <main style={{ padding: 16 }}>{children}</main>
    </div>
  );
}

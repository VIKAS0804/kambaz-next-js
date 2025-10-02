import AccountSidebar from "../_components/AccountSidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 16, padding: 16 }}>
      <AccountSidebar />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar() {
  const p = usePathname();
  const Item = ({ href, label }: { href: string; label: string }) => (
    <div style={{ marginBottom: 8 }}>
      <Link href={href} className={p === href ? "active" : ""}>{label}</Link>
    </div>
  );
  return (
    <aside style={{ width: 220, borderRight: "1px solid #eee", paddingRight: 16 }}>
      <h3>Account</h3>
      <Item href="/Account/Signin" label="Signin" />
      <Item href="/Account/Signup" label="Signup" />
      <Item href="/Account/Profile" label="Profile" />
    </aside>
  );
}

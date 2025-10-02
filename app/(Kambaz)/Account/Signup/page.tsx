import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" defaultValue="newuser" /> <br />
      <input placeholder="password" type="password" className="wd-password" defaultValue="secret" /> <br />
      <input placeholder="verify password" type="password" className="wd-password-verify" defaultValue="secret" /> <br />
      <Link href="/Account/Profile" id="wd-signup-btn">Sign up</Link> <br />
      <Link href="/Account/Signin" id="wd-to-signin-link">Go to Sign in</Link>
    </div>
  );
}

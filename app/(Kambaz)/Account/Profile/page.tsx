import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <label>Username</label><br/><input type="text" defaultValue="alice" /><br/>
      <label>First Name</label><br/><input type="text" defaultValue="Alice" /><br/>
      <label>Last Name</label><br/><input type="text" defaultValue="Wonder" /><br/>
      <label>Password</label><br/><input type="password" defaultValue="password123" /><br/>
      <label>Date of Birth</label><br/><input type="date" defaultValue="2001-02-03" /><br/>
      <label>Email</label><br/><input type="email" defaultValue="alice@example.com" /><br/>
      <label>Role</label><br/>
      <select defaultValue="student">
        <option value="student">Student</option>
        <option value="ta">TA</option>
        <option value="faculty">Faculty</option>
        <option value="admin">Admin</option>
      </select><br/><br/>
      <Link href="/Account/Signin" id="wd-signout-link">Sign out</Link>
    </div>
  );
}

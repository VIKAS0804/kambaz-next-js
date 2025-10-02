export default function Grades({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-grades" style={{ padding: 16 }}>
      <h1>{params.cid} — Grades</h1>
      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Points</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Q1 — Basics</td><td>10</td><td>9</td></tr>
          <tr><td>A2 — CSS</td><td>100</td><td>92</td></tr>
        </tbody>
      </table>
    </div>
  );
}

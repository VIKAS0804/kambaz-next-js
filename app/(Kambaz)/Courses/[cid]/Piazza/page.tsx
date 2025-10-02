export default function Piazza({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-piazza" style={{ padding: 16 }}>
      <h1>{params.cid} — Piazza</h1>
      <p>Discussion forum placeholder.</p>
      <ul>
        <li>Welcome post</li>
        <li>General Q&A</li>
        <li>Project teams</li>
      </ul>
    </div>
  );
}

export default function Quizzes({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-quizzes" style={{ padding: 16 }}>
      <h1>{params.cid} — Quizzes</h1>
      <ul>
        <li>Quiz 1 — HTML Basics</li>
        <li>Quiz 2 — CSS Selectors</li>
        <li>Quiz 3 — JS Fundamentals</li>
      </ul>
    </div>
  );
}

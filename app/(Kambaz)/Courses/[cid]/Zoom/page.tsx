export default function Page({ params }: { params: { cid: string } }) {
    return <div><h1>{params.cid} — PAGE_NAME</h1><p>Placeholder</p></div>;
  }
  
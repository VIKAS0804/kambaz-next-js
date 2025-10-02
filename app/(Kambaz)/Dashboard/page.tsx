import Link from "next/link";

const courses = [
  { id: "CS5610",   title: "CS5610 Web Development",          image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS5800",   title: "CS5800 Algorithms",                image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS6620",   title: "CS6620 Cloud Computing",           image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS5010",   title: "CS5010 Program Design",            image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS6200",   title: "CS6200 Information Retrieval",     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS6140",   title: "CS6140 Machine Learning",          image: "https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FfR1fwLvJDeYDMNenxu3XokLs&width=828" },
  { id: "CS7800",   title: "CS7800 Advanced Algorithms",       image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS5200",   title: "CS5200 Database Systems",          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS5610-2", title: "CS5610 UI Prototyping",            image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200&auto=format&fit=crop" },
  { id: "CS7150",   title: "CS7150 Deep Learning",             image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <div
        id="wd-dashboard-courses"
        style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
      >
        {courses.map((c) => (
          <div
            key={c.id}
            className="wd-dashboard-course"
            style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", background: "#fff" }}
          >
            <Link href={`/Courses/${c.id}`} className="wd-dashboard-course-link" style={{ color: "inherit", textDecoration: "none" }}>
              <img src={c.image} alt={c.title} style={{ width: "100%", height: 150, objectFit: "cover", display: "block" }} />
              <div style={{ padding: 12 }}>
                <h5 style={{ margin: "0 0 6px" }}>{c.id}</h5>
                <p className="wd-dashboard-course-title" style={{ margin: 0 }}>{c.title}</p>
                <button style={{ marginTop: 8 }}>Open Course</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

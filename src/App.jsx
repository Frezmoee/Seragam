import React from "react";

const uniforms = [
  { title: "Seragam Hari Senin", image: "/images/1_20250703_161002_0000.png" },
  { title: "Seragam Hari Selasa", image: "/images/2_20250703_161002_0001.png" },
  { title: "Seragam Hari Rabu", image: "/images/3_20250703_161002_0002.png" },
  { title: "Seragam Hari Kamis", image: "/images/4_20250703_161002_0003.png" },
  { title: "Seragam Hari Jumat", image: "/images/5_20250703_161002_0004.png" },
  { title: "Seragam Olahraga" , image: "/images/6_20250703_161002_0005.png" },
  { title: "Seragam Khusus", image: "/images/7_20250703_161002_0006.png" },
  { image: "/images/8_20250703_161002_0007.png" }
];

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1.5rem" }}>
        Informasi Seragam Sekolah
      </h1>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {uniforms.map((u, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <img src={u.image} alt={u.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{u.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{u.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

const uniforms = [
  { title: "Seragam Hari Senin", description: "Seragam putih abu-abu yang digunakan pada hari Senin untuk upacara bendera.", image: "/images/1_20250703_161002_0000.png" },
  { title: "Seragam Hari Selasa", description: "Seragam batik khas sekolah yang dipakai setiap hari Selasa.", image: "/images/2_20250703_161002_0001.png" },
  { title: "Seragam Hari Rabu", description: "Seragam olahraga yang digunakan saat pelajaran jasmani.", image: "/images/3_20250703_161002_0002.png" },
  { title: "Seragam Hari Kamis", description: "Seragam pramuka lengkap yang dikenakan setiap hari Kamis.", image: "/images/4_20250703_161002_0003.png" },
  { title: "Seragam Hari Jumat", description: "Seragam muslim/muslimah yang dikenakan pada hari Jumat.", image: "/images/5_20250703_161002_0004.png" },
  { title: "Seragam Ekstrakurikuler", description: "Seragam khusus yang dipakai saat mengikuti kegiatan ekstrakurikuler.", image: "/images/6_20250703_161002_0005.png" },
  { title: "Seragam Khusus", description: "Seragam khusus untuk keperluan tertentu seperti lomba atau acara resmi.", image: "/images/7_20250703_161002_0006.png" },
  { title: "Seragam Cadangan", description: "Seragam alternatif yang dapat digunakan saat seragam utama sedang dicuci.", image: "/images/8_20250703_161002_0007.png" }
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

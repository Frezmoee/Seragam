import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Informasi Seragam Sekolah</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uniforms.map((uniform, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <img src={uniform.image} alt={uniform.title} className="w-full h-64 object-cover rounded-t-2xl" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{uniform.title}</h2>
              <p className="text-sm text-gray-600">{uniform.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
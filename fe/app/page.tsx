
// Home.tsx
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* Text content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            Chào mừng đến với <br />
            <span className="text-green-900">Hệ Thống Y Tế Online</span>
          </h1>
          <p className="text-green-800 text-lg md:text-xl">
            Quản lý hồ sơ sức khỏe, đặt lịch khám và nhận tư vấn y tế dễ dàng, mọi lúc mọi nơi.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300">
            Bắt đầu ngay
          </button>
        </div>

        {/* Image content */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-vector/hospital-isometric-3d-building_70347-2762.jpg?ga=GA1.1.756032651.1748420218&semt=ais_hybrid&w=740"
            alt="Medical Team"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </main>
  );
}

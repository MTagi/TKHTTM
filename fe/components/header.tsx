import { cookies } from "next/headers";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCapsules,
  FaBell,
  FaRobot,
  FaCreditCard,
  FaShieldAlt,
} from "react-icons/fa";
import Menu from "./menu";
import GlobalFadeInUpStyle from "./global-fade in-up";

export default async function Header() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access")?.value;
  const role = cookieStore.get("role")?.value;
  return (
    <header className="bg-gradient-to-r from-[#006769] to-[#9DDE8B] shadow-lg">
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-10 py-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform duration-200"
        >
          <img
            src={"https://cdn-icons-png.flaticon.com/128/5996/5996026.png"}
            alt="Bot"
            className="w-14 h-14 "
          />
          NNQuynh Heathcare System
        </Link>
        {accessToken ? (
          role === "patient" ? (
            <div className="flex items-center gap-6">
              <Link
                href={"/lichhen"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-200"
              >
                Hẹn lịch khám
              </Link>
              <Link
                href={"/insurance"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-green-600 transition-all duration-200"
              >
                Bảo hiểm
              </Link>
              <Link
                href={"/pharmacy"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-purple-600 transition-all duration-200"
              >
                Mua thuốc
              </Link>

              <Link
                href={"/chatbot"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-indigo-600 transition-all duration-200"
              >
                Chatbot
              </Link>
              <Menu />
            </div>
          ) : role === "doctor" ? (
            <div className="flex items-center gap-6">
              <Link
                href={"/doctor/appointments"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-200"
              >
                <FaCalendarAlt className="text-blue-300" /> Quản lý lịch hẹn
              </Link>
              <Link
                href={"/doctor/patients"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-green-600 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" />
                </svg>
                Thêm chẩn đoán
              </Link>
              <Link
                href={"/doctor/laboratory"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-7 4h10a2 2 0 002-2v-5a7 7 0 10-14 0v5a2 2 0 002 2z"
                  />
                </svg>
                Tạo yêu cầu xét nghiệm
              </Link>
              <Link
                href={"/doctor/profile"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-yellow-600 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" />
                </svg>
                Hồ sơ
              </Link>
              <Menu />
            </div>
          ) : role === "pharmacist" ? (
            <div className="flex items-center gap-6">
              <Link
                href={"/pharamacist/medicines"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-200"
              >
                <FaCapsules className="text-blue-300" /> Quản lý thuốc
              </Link>
              <Menu />
            </div>
          ) : role === "insurance_provider" ? (
            <div className="flex items-center gap-6">
              <Link
                href={"/insurance_management"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-200"
              >
                <FaShieldAlt className="text-blue-300" /> Quản lý bảo hiểm
              </Link>
              <Menu />
            </div>
          ) : role === "admin" ? (
            <div className="flex items-center gap-6">
              <Link
                href={"/admin"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-200"
              >
                <FaShieldAlt className="text-blue-300" /> Quản lý người dùng
              </Link>
              <Menu />
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link
                href={"/lab_technician/laboratory"}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-7 4h10a2 2 0 002-2v-5a7 7 0 10-14 0v5a2 2 0 002 2z"
                  />
                </svg>
                Quản lý xét nghiệm
              </Link>
              <Menu />
            </div>
          )
        ) : (
          <div className="flex gap-6">
            <Link
              href={"/login"}
              className="relative px-4 py-2 rounded-lg font-semibold text-white hover:bg-blue-600 hover:shadow-lg transition-all duration-200 group"
            >
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-400 group-hover:w-full transition-all duration-300 rounded"></span>
              Login
            </Link>
            <Link
              href={"/register"}
              className="relative px-4 py-2 rounded-lg font-semibold text-white hover:bg-green-600 hover:shadow-lg transition-all duration-200 group"
            >
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-300 rounded"></span>
              Register
            </Link>
          </div>
        )}
      </nav>
      <GlobalFadeInUpStyle />
    </header>
  );
}

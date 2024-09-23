import Link from "next/link";
import { FaReact, FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white flex justify-center items-center overflow-x-hidden overflow-hidden">
      <div className="w-full h-full p-8 bg-gray-900 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold underline text-blue-400">YUMA</h1>
          <div className="space-x-4">
            <Link
              href="/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              scroll={false}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              scroll={false}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-200"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* メインコンテンツ */}
        <section className="mb-8 flex-grow">
          <h1 className="text-4xl font-bold mb-4 text-center">About ME</h1>
          <p className="leading-relaxed text-center">
            はじめまして、ゆーまと申します。現在は芝浦工業大学に在学しながら、TechNovaに所属し、主にフロントエンドの勉強をしています。
            <br />
            これからもたくさんのことを少しずつ学んでいきたいです。
          </p>
        </section>

        {/* EXPERIENCES */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">EXPERIENCES</h2>
          <ul className="list-none space-y-2">
            <li className="flex items-center">2023年3月</li>
            <li className="flex items-center">2023年4月</li>
            <li className="flex items-center">2027年3月</li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="flex space-x-6 list-none justify-center">
            <li>
              <FaReact size={40} title="React" />
            </li>
            <li>
              <FaJava size={40} title="Java" />
            </li>
            <li>
              <SiJavascript size={40} title="JavaScript" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

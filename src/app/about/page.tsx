import Link from "next/link";
import { FaReact, FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white flex justify-center items-center overflow-hidden">
      <div className="w-full h-full p-8 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105 max-w-screen-lg mx-auto">
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold underline text-blue-400">YUMA</h1>
          <div className="space-x-4">
            <Link
              href="/"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* メインコンテンツ */}
        <section className="mb-8 flex-grow">
          <h2 className="text-4xl font-bold mb-4 text-center">About ME</h2>
          <p className="leading-relaxed text-center">
            はじめまして、ゆーまと申します。現在は芝浦工業大学に在学しながら、TechNovaに所属し、主にフロントエンドの勉強をしています。
            <br />
            これからもたくさんのことを少しずつ学んでいきたいです。
          </p>
        </section>

        {/* EXPERIENCES */}
        <section className="mb-8 flex-grow">
          <h2 className="text-4xl font-semibold mb-4 text-center">
            EXPERIENCES
          </h2>
          <ul className="list-none space-y-2 text-center">
            <li className="text-center">
              2023年3月 埼玉県立越谷南高等学校 卒業
            </li>
            <li className="text-center">2023年4月 芝浦工業大学 入学</li>
            <li className="text-center">2027年3月 芝浦工業大学 卒業見込み</li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-4xl font-semibold mb-4 text-center">Skills</h2>
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

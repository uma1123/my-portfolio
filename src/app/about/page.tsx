import Link from "next/link";
import { FaReact, FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <div className="h-screen w-full bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-screen-lg p-8 bg-gray-800 rounded-lg shadow-lg">
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold underline">YUMA</h1>
          <div className="space-x-4">
            <Link
              href="/"
              className="bg-white text-black px-4 py-2 rounded  hover:bg-gray-300 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              scroll={false}
              className="bg-white text-black px-4 py-2 rounded  hover:bg-gray-300 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              scroll={false}
              className="bg-white text-black px-4 py-2 rounded  hover:bg-gray-300 transition duration-200"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* メインコンテンツ */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">About ME</h1>
          <p className="leading-relaxed">
            はじめまして、と申します。現在はに在学しながら、に所属し、主にフロントエンドの勉強をしています。
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
          <ul className="flex space-x-6 list-none">
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

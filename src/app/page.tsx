import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white flex justify-center items-center overflow-x-hidden overflow-y-hidden">
      <div className="w-full h-full p-8 bg-gray-900 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold underline text-blue-400">NAME</h1>
          <div className="space-x-4">
            <Link
              href="/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-200"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* メインコンテンツ部分 */}
        <div className="flex justify-between items-center flex-grow">
          <div className="w-1/2 bg-gray-700 p-6 rounded-lg">
            <p className="text-white">
              こんにちは、ゆーまです。
              <br />
              大学2年生です。
              <br />
              「たくさんのことを少しずつ」をモットーに生活しています。
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="bg-gray-600 w-32 h-32 rounded-full">
              {/* プロフィール画像を追加 */}
            </div>
          </div>
        </div>

        {/* ソーシャルアイコン */}
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="https://github.com/uma1123"
            className="text-white hover:text-blue-400 transition duration-200"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://instagram.com/u_ma_11"
            className="text-white hover:text-blue-400 transition duration-200"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com/uma11_11"
            className="text-white hover:text-blue-400 transition duration-200"
          >
            <FaXTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

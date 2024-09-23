import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Home() {
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
              className="bg-white text-black px-4 py-2 rounded  hover:bg-gray-300 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="bg-white text-black px-4 py-2 rounded  hover:bg-gray-300 transition duration-200"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* メインコンテンツ部分 */}
        <div className="flex justify-between items-center">
          <div className="w-1/2 bg-gray-300 p-6 rounded-lg">
            <p className="text-black">
              こんにちは、芝浦工業大学に在学中のゆーまです。
              <br />
              「たくさんのことを少しずつ」をモットーに生活しています。
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="bg-gray-100 w-32 h-32 rounded-full">
              {/* プロフィール画像を追加 */}
            </div>
          </div>
        </div>

        {/* ソーシャルアイコン */}
        <div className="flex justify-center space-x-8 mt-8">
          <a href="https://github.com/uma1123" className="text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com/u_ma_11" className="text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com/uma11_11" className="text-white">
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

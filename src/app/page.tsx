import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

        {/* メインコンテンツ部分 */}
        <div className="flex flex-col md:flex-row justify-between items-center flex-grow">
          <div className="md:w-1/2 bg-gray-700 p-6 rounded-lg mb-6 md:mb-0 shadow-lg">
            <p className="text-white text-lg leading-relaxed">
              こんにちは、ゆーまです。
              <br />
              大学2年生です。
              <br />
              「たくさんのことを少しずつ」をモットーに生活しています。
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            {/* プロフィール画像を円形で表示 */}
            <div className="w-40 h-40 relative overflow-hidden rounded-full border-4 border-blue-400 shadow-lg">
              <Image
                src="/snow.jpg"
                alt="プロフィール"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* ソーシャルアイコン */}
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="https://github.com/uma1123"
            className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-125"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://instagram.com/u_ma_11"
            className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-125"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com/uma11_11"
            className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-125"
          >
            <FaXTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

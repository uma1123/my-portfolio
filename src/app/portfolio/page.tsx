import Link from "next/link";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
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
        <h1 className="text-4xl font-bold mb-4 text-center">Portfolio</h1>
        <div className="text-2xl font-semibold text-center flex-grow flex items-center justify-center animate-pulse">
          Coming Soon....
        </div>
      </div>
    </div>
  );
}

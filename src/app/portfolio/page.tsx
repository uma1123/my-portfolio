import Link from "next/link";

export const metadata = {
  title: "Portfolio",
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

        {/* メインコンテンツ部分 */}
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <div className="text-2xl font-semibold text-center">
          Coming Soon....
        </div>
      </div>
    </div>
  );
}

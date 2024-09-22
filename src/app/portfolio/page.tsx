import Link from "next/link";

export const metadata = {
  title: "Portfolio",
};

export default async function Page() {
  return (
    <div className="h-screen w-full bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-screen-lg p-8 bg-gray-800 rounded-lg shadow-lg">
        {/*へっだー*/}
        <div className="flex justify-between items-center mb-8">
          <div className="space-x-4">
            <Link href="/" className="bg-white text-black px-4 py-2 rounded">
              Home
            </Link>
            <Link
              href="/about"
              scroll={false}
              className="bg-white text-black px-4 py-2 rounded"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              scroll={false}
              className="bg-white text-black px-4 py-2 rounded"
            >
              Portfolio
            </Link>
          </div>
        </div>
        {/* メインコンテンツ部分 */}
        <h1>Portfolio</h1>
        <div className="text-3xl font-bold">Coming Soon....</div>
      </div>
    </div>
  );
}

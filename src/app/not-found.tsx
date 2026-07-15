import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-pixel-square text-gray-900 dark:text-white">
        (<span className="text-blue-500">ᵕ</span>—ᴗ—)
      </h1>
      <p className="mt-8 text-xl font-mono text-gray-600 dark:text-gray-400">
        I cannot find this page.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 text-blue-500 hover:text-slate-950 font-medium font-mono underline underline-offset-6 transition-colors duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}

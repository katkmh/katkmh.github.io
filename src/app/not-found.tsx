import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}

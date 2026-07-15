import Link from "next/link";

export function Outro() {
  return (
    <div className="mb-6 2xl:mb-32 px-7 2xl:px-0 flex gap-2">
      <div>🚀</div>
      <div>
        <p className="text-sm whitespace-pre-line">
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            className="text-blue-500 dark:text-blue-400 font-mono hover:underline"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://opencode.ai/"
            className="text-blue-500 dark:text-blue-400 font-mono hover:underline"
          >
            opencode
          </Link>
          .<span className="inline md:hidden">{"\n"}</span>
          <span className="hidden md:inline"> </span>Coded in{" "}
          <Link
            href="https://zed.dev/"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 font-mono hover:underline"
          >
            Zed
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

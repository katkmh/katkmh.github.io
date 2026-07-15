import Link from "next/link";

export function Outro() {
  return (
    <div className="w-md mb-32">
      <p className="text-sm">
        🚀 Built with{" "}
        <Link
          href="https://nextjs.org/"
          className="text-blue-500 font-mono hover:underline"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://opencode.ai/"
          className="text-blue-500 font-mono hover:underline"
        >
          opencode
        </Link>
        . Coded in{" "}
        <Link
          href="https://zed.dev/"
          className="text-blue-500 font-mono hover:underline"
        >
          Zed
        </Link>
        .
      </p>
    </div>
  );
}

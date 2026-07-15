import Link from "next/link";

export function Connect() {
  return (
    <div className="flex grow items-center px-7 2xl:px-0">
      <section id="connect" className="mb-24 2xl:mb-[40vh]">
        <p>
          Get in touch 👋🏼{"\u00A0\u00A0\u00A0"}—{" "}
          <Link
            href="mailto:hernandez.kkm@gmail.com"
            className="text-blue-500 dark:text-blue-400 font-medium font-mono hover:underline underline-offset-6"
          >
            hernandez.kkm@gmail.com
          </Link>
        </p>
      </section>
    </div>
  );
}

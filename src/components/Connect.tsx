import Link from "next/link";

export function Connect() {
  return (
    <div className="flex grow items-center">
      <section id="connect" className="mb-[40vh]">
        <p>
          Get in touch 👋🏼{"\u00A0\u00A0\u00A0"}—{" "}
          <Link
            href="mailto:hernandez.kkm@gmail.com"
            className="text-blue-500 font-medium font-mono hover:underline underline-offset-6"
          >
            hernandez.kkm@gmail.com
          </Link>
        </p>
      </section>
    </div>
  );
}

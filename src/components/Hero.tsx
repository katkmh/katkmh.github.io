"use client";
import Image from "next/image";
import Link from "next/link";

const sections = ["about", "experience", "connect"];

export function Hero() {
  return (
    <div className="md:pl-8 2xl:pl-80 2xl:pt-56">
      <div>
        <div className="2xl:pb-32">
          <section className="mb-8">
            <p className="text-5xl font-pixel-square">Kat Hernandez</p>
            <p className="text-xl font-mono">Senior Software Engineer</p>
          </section>
          <section className="flex flex-col">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-mono lowercase tracking-wide hover:tracking-[3] hover:bg-linear-to-r from-neutral-50 to-neutral-50/0 to-40% transition-all duration-200"
              >
                {id.charAt(0).toLowerCase() + id.slice(1)}
              </a>
            ))}
          </section>
        </div>
        <div className="flex gap-2">
          <Link href="https://www.linkedin.com/in/katkmh/">
            <Image src="/linked-in.svg" alt="Logo" width={28} height={28} />
          </Link>
          <Link href="mailto:hernandez.kkm@gmail.com">
            <Image src="/gmail.svg" alt="Logo" width={30} height={30} />
          </Link>
          <Link href="https://github.com/katkmh">
            <Image src="/github.svg" alt="Logo" width={27} height={27} />
          </Link>
        </div>
      </div>
    </div>
  );
}

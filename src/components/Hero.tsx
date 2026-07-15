import Link from "next/link";

const sections = ["about", "experience", "connect"];

export function Hero() {
  return (
    <div className="pl-7 lg:pl-24 2xl:pl-80 lg:pt-36 2xl:pt-56">
      <div className="mt-24 lg:mt-0 lg:pb-32">
        <section className="mb-8">
          <p className="text-5xl font-pixel-square">Kat Hernandez</p>
          <p className="text-xl font-mono">Senior Software Engineer</p>
        </section>
        <div className="hidden lg:block">
          <section className="flex flex-col">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-mono lowercase tracking-wide hover:tracking-[3] hover:bg-linear-to-r from-neutral-50 dark:from-slate-600/50 to-neutral-50/0 to-40%  transition-all duration-200"
              >
                {id.charAt(0).toLowerCase() + id.slice(1)}
              </a>
            ))}
          </section>
        </div>
      </div>
      <div className="flex gap-2">
        <Link href="https://www.linkedin.com/in/katkmh/">
          <img
            src="/linked-in.svg"
            alt="Logo"
            className="w-6 h-6 2xl:w-7 2xl:h-7"
          />
        </Link>
        <Link href="mailto:hernandez.kkm@gmail.com">
          <img
            src="/gmail.svg"
            alt="Logo"
            className="w-6 h-6 2xl:w-7 2xl:h-7"
          />
        </Link>
        <Link href="https://github.com/katkmh">
          <img
            src="/github.svg"
            alt="Logo"
            className="w-6 h-6 2xl:w-7 2xl:h-7 dark:invert"
          />
        </Link>
      </div>
    </div>
  );
}

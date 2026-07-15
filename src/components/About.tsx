import { Placeholder } from "./Placeholder";

export function About() {
  return (
    <div>
      <section
        id="about"
        className="px-7 lg:px-24 2xl:px-0 mt-12 2xl:mt-60 flex flex-col gap-6"
      >
        <Placeholder rows={6} />
        <Placeholder rows={3} />
      </section>
    </div>
  );
}

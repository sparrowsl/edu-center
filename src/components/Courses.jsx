import Accordions from "./Accordions";
import SectionHeader from "./shared/SectionHeader";

export default function Courses() {
  return (
    <>
      <article class="container flex flex-col py-10 mx-auto mx-5 min-h-screen justify-center items-center">
        <SectionHeader
          title="Our Courses"
          subtitle={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo. `}
        />

        <section class="grid md:grid-cols-2 mx-4 mt-15 gap-10 md:gap-20">
          <img src="/assets/building.jpg" class="border border-teal p-1" />
          <Accordions />
        </section>
      </article>
    </>
  );
}

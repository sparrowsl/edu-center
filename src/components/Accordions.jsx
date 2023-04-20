import { For } from "solid-js";

const courses = [
  { number: 350, name: "DESIGNING COURSES" },
  { number: 250, name: "ENGINEERING COURSES" },
  { number: 153, name: "MANAGEMENT COURSES" },
];

export default function Accordions() {
  return (
    <>
      <div class="max-w-xl flex flex-col gap-3">
        <For each={courses}>{
          (course) =>
            <details class="border rounded shadow">
              <summary class="py-2 px-4 bg-gray-600/10 text-gray-800 hover:(underline cursor-pointer)">
                <b>{course.number}+</b> {course.name}
              </summary>
              <p class="px-3 py-4 text-gray-700 text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus sagittis egestas mauris ut vehicula. Cras viverra ac orci ac aliquam.
                Nulla eget condimentum mauris, eget tincidunt est.</p>
            </details>
        }</For>

        <p class="p-5 bg-teal-700/20 rounded mt-8 text-teal-700 text-3xl tracking-widest font-bold">
          2500+ Centers
        </p>
      </div>
    </>
  );
}

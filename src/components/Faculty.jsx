import { For } from "solid-js";
import FacultyCard from "./shared/FacultyCard.jsx";
import SectionHeader from "./shared/SectionHeader.jsx";
import faculties from "../utils/faculty.js";

export default function Faculty() {
	return (
		<>
			<div class="bg-#F0F0F0">
				<article class="container flex px-4 flex-col mx-auto mx-5 min-h-80svh justify-center items-center">
					<SectionHeader
						title="Our Faculty"
						subtitle={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo. `}
					/>

					<section class="grid mt-15 gap-10 md:(grid-cols-3) justify-center">
						<For each={faculties}>{(faculty) => <FacultyCard faculty={faculty} />}</For>
					</section>
				</article>
			</div>
		</>
	);
}

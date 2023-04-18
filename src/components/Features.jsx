import { For } from "solid-js";
import SectionHeader from "./shared/SectionHeader.jsx";
import FeatureCard from "./shared/FeatureCard.jsx";
import features from "../utils/features.js";

export default function Features() {
	return (
		<>
			<article class="container mx-auto my-16 mx-5 min-h-50svh">
				<SectionHeader
					title="Features"
					subtitle={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo. `}
				/>

				<section class="flex mt-15 gap-10">
					<For each={features}>{(feature) => <FeatureCard feature={feature} />}</For>
				</section>
			</article>
		</>
	);
}

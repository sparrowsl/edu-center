export default function FeatureCard(props) {
	return (
		<>
			<figure class="text-left">
				<span class="border-teal rounded-full border-1 w-fit p-5 animate-bounce animate-duration-2000 block">
					<i class={`i-${props.feature.icon} text-4xl text-teal-600 animate-pulse`}>
						Icon {props.feature.icon}
					</i>
				</span>
				<figcaption class="mt-4">
					<h2 class="font-bold text-2xl text-gray-700 uppercase">{props.feature.title}</h2>

					<hr class="border-teal border-2 mt-5" />
					<hr class="border-teal border-2 mt-4 mb-5" />

					<p class="mt-3 text-gray-600">{props.feature.text}</p>
				</figcaption>
			</figure>
		</>
	);
}

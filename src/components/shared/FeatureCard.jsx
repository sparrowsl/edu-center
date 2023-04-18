export default function FeatureCard(props) {
	return (
		<>
			<figure class="text-left">
				<i class={`i-${props.feature.icon}`}>Icon {props.feature.icon}</i>
				<figcaption class="mt-4">
					<h2 class="font-bold text-2xl text-gray-700 uppercase">{props.feature.title}</h2>

					<hr class="border-red border-2 mt-5" />
					<hr class="border-red border-2 mt-4 mb-5" />

					<p class="mt-3 text-gray-600">{props.feature.text}</p>
				</figcaption>
			</figure>
		</>
	);
}

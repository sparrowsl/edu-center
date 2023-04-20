export default function FeatureCard(props) {
	return (
		<>
			<figure class="text-left">
				<h2 class="flex gap-3 items-center uppercase">
					<span class="border-teal rounded-full border-1 w-fit p-3 animate-bounce animate-duration-2000 block">
						<i class={`i-${props.feature.icon} text-4xl text-teal-600 animate-pulse`}></i>
					</span>
					<span class="font-bold text-xl text-gray-700 whitespace-nowrap">
						{props.feature.title}
					</span>
				</h2>
				<figcaption class="mt-4">
					<hr class="border-teal border-2 mt-5" />
					<hr class="border-teal border-2 mt-4 mb-5" />

					<p class="mt-3 text-gray-600">{props.feature.text}</p>
				</figcaption>
			</figure>
		</>
	);
}

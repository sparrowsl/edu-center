export default function SectionHeader(props) {
	return (
		<div class="mx-auto max-w-xl px-4">
			<h3 class="font-bold text-(center black 2xl) uppercase">{props.title}</h3>
			<p class="text-(sm gray-600 center) mt-3 leading-7">{props.subtitle}</p>
		</div>
	);
}

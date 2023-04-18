export default function SectionHeader(props) {
	return (
		<div class="mx-auto max-w-xl">
			<h3 class="font-bold text-center text-black text-2xl uppercase">{props.title}</h3>
			<p class="text-center text-sm text-gray-600 leading-7">{props.subtitle}</p>
		</div>
	);
}

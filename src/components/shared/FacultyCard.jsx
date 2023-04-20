export default function FacultyCard(props) {
	return (
		<>
			<figure class="text-left">
				<img src={props.faculty.image} class="border-teal border rounded" />

				<figcaption class="mt-4">
					<h2 class="font-bold text-xl text-gray-700 whitespace-nowrap">{props.faculty.title}</h2>
					<hr class="border-teal border-2 mt-5" />

					<p class="mt-3 text-gray-600">{props.faculty.text}</p>
				</figcaption>
			</figure>
		</>
	);
}

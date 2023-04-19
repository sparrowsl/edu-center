import { createSignal } from "solid-js";
import Navigation from "./Navigation.jsx";

export default function Header() {
	const words = ["THE UNIQUE METHOD", "UNMATCHED APPROACH", "AWESOME FACULTY PANEL"];
	let currentWordIndex = 0;
	const [getWord, setWord] = createSignal(words[currentWordIndex]);

	setInterval(() => {
		if (currentWordIndex < words.length) {
			setWord(words[currentWordIndex]);
			currentWordIndex++;
		} else {
			currentWordIndex = 0;
		}
	}, 1500);

	return (
		<>
			<Navigation />
			<header class="bg-cover flex flex-col min-h-70svh relative justify-center items-center header-bg">
				<div class="container text-white text-center">
					<h3 class="font-normal text-xl tracking-widest">DELIVERING QUALITY EDUCATION</h3>
					<h1 class="font-extrabold border-gray-300 border-b-5 mt-2 pb-5 text-5xl">{getWord()}</h1>
					<p class="bg-white flex font-bold mx-auto mb-5 tracking-wider w-fit py-2 px-6 right-0 bottom-0 animate-pulse left-0 text-teal-600 gap-3 capitalize italic absolute items-center">
						<i class="text-3xl i-mdi:book-open-page-variant-outline"></i>
						Welcome to EduCenter
						<i class="text-3xl i-mdi:book-open-page-variant-outline"></i>
					</p>
				</div>
			</header>
		</>
	);
}

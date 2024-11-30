import { useEffect, useState } from "react";
import { fetchPages } from "./utils/fetchPages";
import { WordPressPage } from "./utils/fetchPages.types";
import { fetchPage } from "./utils/fetchPage";
import imgUrl from "./assets/images/logo.png";
import Phone from "./assets/images/phone.svg";
import Email from "./assets/images/email.svg";
import LinkedIn from "./assets/images/linkedin.svg";
import cv from "./assets/files/nathan-cv.pdf";

const App = () => {
	const [intro, setIntro] = useState<WordPressPage>();
	const [workList, setWorkList] = useState<WordPressPage[]>([]);
	const [skills, setSkills] = useState<WordPressPage[]>([]);

	const fetchIntro = async () => {
		setIntro(await fetchPage(31));
	};

	const fetchData = async () => {
		setWorkList(await fetchPages({ parent: 29 }));
		setSkills(await fetchPages({ parent: 33 }));
	};

	// Calling the function on page load
	useEffect(() => {
		fetchIntro();
		fetchData();
	}, []);

	console.log("workList", workList);

	return (
		<>
			<nav className="flex items-center justify-between mb-10 p-5">
				<img src={imgUrl} alt="Logo" />

				<a href={cv} download>
					Get my CV
				</a>
			</nav>
			<section className="section p-5">
				<h1 className="text-4xl font-bold mb-1">Nathan Smith</h1>
				<h2 className="text-3xl font-bold mb-3">Software Engineer</h2>

				{intro?.content.rendered && (
					<div
						className="mb-2"
						dangerouslySetInnerHTML={{ __html: intro.content.rendered }}
					/>
				)}
			</section>
			<section className="section p-5">
				<h3 className="text-2xl font-bold mb-2">Work history</h3>
				{workList.map((page) => (
					<div key={page.id} className="mb-6">
						<h4 className="text-1xl font-bold mb-1">{page.title.rendered}</h4>
						{page?.content.rendered && (
							<div
								className="mb-2"
								dangerouslySetInnerHTML={{ __html: page.content.rendered }}
							/>
						)}
					</div>
				))}
			</section>

			<section className="section p-5">
				<h3 className="text-2xl font-bold mb-2">Skills and experience</h3>
				{skills.map((page) => (
					<div key={page.id}>
						<h4 className="text-1xl font-bold mb-1">{page.title.rendered}</h4>
						{page?.content.rendered && (
							<p
								className="mb-2"
								dangerouslySetInnerHTML={{ __html: page.content.rendered }}
							/>
						)}
					</div>
				))}
			</section>
			<section className="section p-5">
				<div className="flex items-center justify-center space-x-8 mt-5">
					<a
						href="tel:+64272141615"
						className="w-11 h-11 flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition ease-in-out duration-100"
					>
						<Phone />
					</a>

					<a
						href="mailto:nathansmithdeveloper@gmail.com"
						className="w-11 h-11 flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition ease-in-out duration-100"
					>
						<Email />
					</a>

					<a
						href="https://www.linkedin.com/in/nathan-smith-4061164a/"
						target="_blank"
						className="w-11 h-11 flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition ease-in-out duration-100"
					>
						<LinkedIn />
					</a>
				</div>
			</section>
		</>
	);
};

export default App;

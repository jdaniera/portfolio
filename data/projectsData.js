export const projectsData = [
	{
		slug: "onward",
		title: "Onward",
		tag: "case study",
		image: "/images/onward/transcription.png",
		summary:
			"A mock interview web-app",
		overview: [
			{ label: "role", value: "UX Researcher, Developer" },
			{ label: "timeline", value: "January 2024 — May 2024" },
			{ label: "type", value: "Web App" },
			{ label: "toolstack", value: "Figma, Next.js, Chakra UI" },
			{ label: "program used", value: "Next.js, Azure Cognitive Services" },
			{
				label: "link",
				value: (
					<a
						href="https://onward-prep.ca/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit Onward
					</a>
				),
			},
		],
		projectDetailsLink: "/projects/onward",
	},
	// {
	//   slug: "fairshare",
	//   title: "FairShare",
	//   image: "/images/fairshare/cover.png",
	//   summary: "Designed an expense tracker mobile app with bill splitting capabilities.",
	//   overview: [
	//     { label: "role", value: "UI/UX Designer" },
	//     { label: "timeline", value: "September 2023 — December 2023" },
	//     { label: "type", value: "Mobile App" },
	//     { label: "toolstack", value: "Figma" },
	//     { label: "program used", value: "React Native, Supabase" },
	//     { label: "link", value: <a href="https://fairshare-app.com" target="_blank" rel="noopener noreferrer">Visit FairShare</a> },
	//   ],
	//   projectDetailsLink: "/projects/fairshare",
	// },
	{
		slug: "neighbourly",
		title: "Neighbourly",
		image: "/images/neighbourly/homepage.webp",
		summary: "A community-based service marketplace mobile app",
		overview: [
			{ label: "role", value: "UI/UX Designer, Front-end Developer" },
			{ label: "timeline", value: "January 2024 — May 2024" },
			{ label: "type", value: "Website / Web App / Mobile App" },
			{ label: "toolstack", value: "Figma, Next.js" },
			{ label: "program used", value: "Next.js, Azure" },
			{
				label: "link",
				value: (
					<a
						href="neighbourly-beryl.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit Neighbourly
					</a>
				),
			},
		],
		projectDetailsLink: "/projects/neighbourly",
	},
	{
		slug: "ode-to",
		title: "Ode To...",
		image: "/images/ode-to/3-cans.webp",
		summary: "A canned mocktail beverage line.",
		overview: [
			{ label: "role", value: "Graphic Designer" },
			{ label: "timeline", value: "2 Weeks | November 2024" },
			{ label: "type", value: "Graphic Design, Branding" },
			{
				label: "toolstack",
				value: "Adobe Photoshop, Adobe Illustrator",
			},
		],
		projectDetailsLink: "/projects/ode-to",
	},
];

import logoAnimaginary from "@/images/logos/animaginary.svg";
import logoCosmos from "@/images/logos/cosmos.svg";
import logoHelioStream from "@/images/logos/helio-stream.svg";
import logoOpenShuttle from "@/images/logos/open-shuttle.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";
import {
	Boxes,
	CheckCheck,
	GitCompare,
	HardDrive,
	Info,
	LayoutList,
	MousePointerClick,
	Phone,
	Server,
	Terminal,
} from "lucide-react";
import {
	LaravelIcon,
	NextJsIcon,
	NginxIcon,
	LinuxIcon,
	TailWindCssIcon,
	BootsStrapIcon,
	MySQLIcon,
	PostgreSQLIcon,
	MongoDBIcon,
	JQueryIcon,
	ReactJSIcon,
	NodeJSIcon,
	SCSSIcon,
	CSSIcon,
	JavascriptIcon,
	HtmlIcon,
	TypescriptIcon,
	PHPIcon,
	WordPressIcon,
	GitIcon,
	GitHubImageIcon,
	ExpressIcon,
	AwsIcon,
	DigitalOceanIcon,
	FigmaIcon,
	ThreeJsIcon,
	ReduxIcon,
	FiverrIcon,
	UpWorkIcon,
	UseGroupIcon,
} from "@/components/Icons";
import BlurImage from "@/components/BlurImage";

export const twitter = "https://twitter.com/@awesomecoderdev";
export const github = "https://github.com/awesomecoderdev";
export const facebook = "https://facebook.com/awesomecoderdev";
export const discord = "https://discordapp.com/users/1006478863385231400";
export const linkedin = "https://linkdin.com/awesomecoderdev";
export const instagram = "https://www.instagram.com/awesomecoderdev";

export const navigations = [
	{
		title: "Mohammad Ibrahim Kholil",
		links: [
			{
				title: "About",
				href: "/about",
				// icon: Info,
				// icon: MousePointerClick,
				icon: GitCompare,
			},
			{
				title: "Skills",
				href: "/skills",
				icon: Terminal,
				// sections: [
				// 	{
				// 		title: "Languages",
				// 		links: [
				// 			{
				// 				title: "HTML",
				// 				href: "/skills/#html",
				// 				icon: Terminal,
				// 				tag: "POST",
				// 			},
				// 			{
				// 				title: "CSS",
				// 				href: "/skills/#css",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "JavaScript",
				// 				href: "/skills/#javascript",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "TypeScript",
				// 				href: "/skills/#typescript",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "NODE",
				// 				href: "/skills/#node",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "PHP",
				// 				href: "/skills/#php",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "PHP [OOP]",
				// 				href: "/skills/#php-oop",
				// 				icon: Terminal,
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "UI / Library",
				// 		links: [
				// 			{
				// 				title: "SCSS",
				// 				href: "/skills/#scss",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Bootstrap",
				// 				href: "/skills/#bootstrap",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Tailwind",
				// 				href: "/skills/#tailwind",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Shadcn UI",
				// 				href: "/skills/#shadcn",
				// 				icon: Terminal,
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "Frameworks",
				// 		links: [
				// 			{
				// 				title: "React.JS",
				// 				href: "/skills/#react",
				// 				icon: Terminal,
				// 			},
				// 			,
				// 			{
				// 				title: "Next.JS",
				// 				href: "/skills/#next",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Three.JS",
				// 				href: "/skills/#three",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Laravel",
				// 				href: "/skills/#laravel",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "WordPress",
				// 				href: "/skills/#wordpress",
				// 				icon: Terminal,
				// 			},
				// 		],
				// 	},
				// ],
			},
			{
				title: "Projects",
				href: "/projects",
				icon: Boxes,
			},
			{
				title: "Testimonials",
				href: "/testimonials",
				icon: LayoutList,
			},
			{
				title: "Contact",
				href: "/contact",
				icon: Phone,
			},
		],
	},
	{
		title: "Languages",
		links: [
			{
				title: "HTML",
				href: "/skills/#html",
				icon: Terminal,
			},
			{
				title: "CSS",
				href: "/skills/#css",
				icon: Terminal,
			},
			{
				title: "JavaScript",
				href: "/skills/#javascript",
				icon: Terminal,
			},
			{
				title: "TypeScript",
				href: "/skills/#typescript",
				icon: Terminal,
			},
			{
				title: "NODE.JS",
				href: "/skills/#nodejs",
				icon: Terminal,
			},
			{
				title: "PHP [OOP]",
				href: "/skills/#php",
				icon: Terminal,
			},
		],
	},
	{
		title: "UI / Library",
		links: [
			{
				title: "SCSS",
				href: "/skills/#scss",
				icon: Terminal,
			},
			{
				title: "Bootstrap",
				href: "/skills/#bootstrap",
				icon: Terminal,
			},
			{
				title: "Tailwind",
				href: "/skills/#tailwind-css",
				icon: Terminal,
			},
			// {
			// 	title: "Shadcn UI",
			// 	href: "/skills/#shadcn",
			// 	icon: Terminal,
			// },
		],
	},
	{
		title: "Frameworks",
		links: [
			{
				title: "React.JS",
				href: "/skills/#react",
				icon: Terminal,
			},
			,
			{
				title: "Next.JS",
				href: "/skills/#next",
				icon: Terminal,
			},
			{
				title: "Three.JS",
				href: "/skills/#three",
				icon: Terminal,
			},
			{
				title: "Laravel",
				href: "/skills/#laravel",
				icon: Terminal,
			},
		],
	},
	{
		title: "CMS",
		links: [
			{
				title: "WordPress Customization",
				href: "/skills/#wordpress-customization",
				icon: Terminal,
			},
			{
				title: "WordPress Custom Theme",
				href: "/skills/#wordpress-custom-theme",
				icon: Terminal,
			},
			{
				title: "WordPress Custom Plugin",
				href: "/skills/#wordpress-custom-plugin",
				icon: Terminal,
			},
			// {
			// 	title: "Grav CMS",
			// 	href: "/skills/#grav",
			// 	icon: Terminal,
			// },
		],
	},
	{
		title: "Database / Server",
		links: [
			{
				title: "MYSQL",
				href: "/skills/#mysql",
				icon: HardDrive,
			},
			{
				title: "MongoDB",
				href: "/skills/#mongodb",
				icon: HardDrive,
			},
			{
				title: "PostgreSQL",
				href: "/skills/#postgressql",
				icon: HardDrive,
			},
			{
				title: "Linux",
				href: "/skills/#linux",
				icon: Server,
			},
			{
				title: "Nginx",
				href: "/skills/#nginx",
				icon: Server,
			},
			{
				title: "Apache",
				href: "/skills/#apache",
				icon: Server,
			},
			{
				title: "Aws",
				href: "/skills/#aws",
				icon: Server,
			},
		],
	},
];

export const skills: Skill[] = [
	{
		name: "HTML",
		description:
			"HTML is the standard markup language for Web pages. With HTML you can create your own Website. ",
		level: 90,
		icon: <HtmlIcon className="h-8 w-8 " />,
		type: ["all", "frontend"],
	},
	{
		name: "CSS",
		description:
			"CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
		level: 90,
		icon: <CSSIcon className="h-8 w-8" />,
		type: ["all", "frontend"],
	},
	{
		name: "SCSS",
		description:
			"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
		level: 90,
		icon: <SCSSIcon className="h-6 w-6" />,
		type: ["all", "frontend"],
	},
	{
		name: "Bootstrap",
		description:
			"Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need.",
		level: 90,
		icon: <BootsStrapIcon className="h-7 w-7" />,
		type: ["all", "frontend"],
	},
	{
		name: "Tailwind CSS",
		description:
			"Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
		level: 90,
		icon: <TailWindCssIcon className="h-8 w-8" />,
		type: ["all", "frontend", "featured"],
	},
	{
		name: "JavaScript",
		description:
			"JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.",
		level: 90,
		icon: <JavascriptIcon className="text-yellow-300 h-6 w-6" />,
		technology: "js",
		type: ["all", "frontend", "backend"],
	},
	{
		name: "TypeScript",
		description:
			"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. ",
		level: 90,
		icon: <TypescriptIcon className="text-blue-500 h-6 w-6" />,
		technology: "js",
		type: ["all", "frontend", "backend", "featured"],
	},
	{
		name: "jQuery",
		description:
			"jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation.",
		level: 90,
		icon: <JQueryIcon className="text-blue-500 h-6 w-6" />,
		technology: "js",
		type: ["all", "frontend"],
	},
	{
		name: "NodeJS",
		description:
			"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
		level: 90,
		icon: <NodeJSIcon className="h-6 w-6" />,
		technology: "js",
		type: ["all", "backend", "featured"],
	},
	{
		name: "Express.js",
		description:
			"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
		level: 90,
		icon: <ExpressIcon className="h-7 w-7 text-black dark:text-white" />,
		technology: "version",
		type: ["all", "backend"],
	},
	{
		name: "React.js",
		description:
			"React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build.",
		level: 90,
		icon: <ReactJSIcon className="h-6 w-6" />,
		technology: "js",
		type: ["all", "frontend", "featured"],
	},

	{
		name: "Next.js",
		description:
			"Next.js is a React.js Framework. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications.",
		level: 90,
		icon: NextJsIcon,
		technology: "js",
		type: ["all", "frontend", "backend", "featured"],
	},
	{
		name: "Redux",
		description:
			"Redux is an open-source JavaScript library for managing and centralizing application state.",
		level: 90,
		icon: <ReduxIcon className="h-6 w-6 ml-0.5" />,
		technology: "js",
		type: ["all", "frontend"],
	},
	{
		name: "Three.js",
		description:
			"Three.js is a cross-browser JavaScript library and application programming interface (API) used to create and display 3D animation.",
		level: 90,
		icon: <ThreeJsIcon className="h-6 w-6 ml-1" />,
		technology: "js",
		type: ["all", "frontend"],
	},
	{
		name: "PHP",
		description:
			"A popular general-purpose scripting language that is especially suited to web development.",
		level: 90,
		icon: <PHPIcon className="text-blue-500 h-8 w-8" />,
		technology: "php",
		type: ["all", "frontend", "backend"],
	},
	{
		name: "Laravel",
		description:
			"Laravel is a web application framework with expressive, elegant syntax.",
		level: 90,
		icon: LaravelIcon,
		technology: "php",
		type: ["all", "frontend", "backend", "featured"],
	},
	{
		name: "WordPress Customization",
		description:
			"WordPress is a web content management system. It was originally created as a tool to publish blogs but has evolved to support publishing other web content.",
		level: 90,
		icon: <WordPressIcon className="text-blue-500 h-7 w-7" />,
		technology: "php",
		type: ["all", "frontend", "cms", "others"],
	},
	{
		name: "WordPress Custom Theme",
		description:
			"WordPress custom theme can be any type of custom functionality that can be build from scratch.",
		level: 90,
		icon: <WordPressIcon className="text-blue-500 h-7 w-7" />,
		technology: "php",
		type: ["all", "frontend", "cms", "others"],
	},
	{
		name: "WordPress Custom Plugin",
		description:
			"WordPress custom plugin used to add custom functionality based on requirements.",
		level: 90,
		icon: <WordPressIcon className="text-blue-500 h-7 w-7" />,
		technology: "php",
		type: ["all", "frontend", "cms", "others"],
	},
	{
		name: "MySQL",
		description:
			"MySQL is an open-source relational database management system.",
		level: 90,
		icon: <MySQLIcon className="h-6 w-6" />,
		technology: "database",
		type: ["all", "database"],
	},
	{
		name: "PostgresSQL",
		description:
			"PostgreSQL, also known as Postgres, is a free and open-source relational database management system.",
		level: 90,
		icon: <PostgreSQLIcon className="h-6 w-6" />,
		technology: "database",
		type: ["all", "database"],
	},
	{
		name: "MongoDB",
		description:
			"MongoDB is a source-available cross-platform document-oriented database program.",
		level: 90,
		icon: <MongoDBIcon className="h-9 w-9" />,
		technology: "database",
		type: ["all", "database"],
	},
	{
		name: "Linux (Ubuntu)",
		description:
			"Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.",
		level: 90,
		icon: (
			<div
				className=" rounded-full flex items-center justify-center h-9 w-9"
				style={{ background: "red", padding: "10px" }}
			>
				<LinuxIcon className="h-5 w-5 -ml-1 " />
			</div>
		),
		technology: "server",
		type: ["all", "server", "featured"],
	},
	{
		name: "NginX",
		description:
			"Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
		level: 90,
		icon: <NginxIcon className="h-9 w-9" />,
		technology: "server",
		type: ["all", "server", "featured"],
	},
	{
		name: "Git",
		description:
			"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
		level: 90,
		icon: <GitIcon className="h-8 w-8" />,
		technology: "version",
		type: ["all", "others"],
	},
	{
		name: "Github",
		description:
			"GitHub is a platform and cloud-based service for software development and version control using Git.",
		level: 90,
		icon: (
			<GitHubImageIcon className="h-7 w-7 text-black dark:text-white" />
		),
		technology: "version",
		type: ["all", "others", "front"],
	},
	{
		name: "Figma",
		description:
			"Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
		level: 90,
		icon: <FigmaIcon className="h-7 w-7 text-black dark:text-white" />,
		technology: "version",
		type: ["all", "others", "featured"],
	},

	{
		name: "AWS",
		description:
			"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms.",
		level: 90,
		icon: <AwsIcon className="h-7 w-7 text-black dark:text-white" />,
		technology: "version",
		type: ["all", "server", "others", "featured"],
	},
	{
		name: "DigitalOcean",
		description:
			"DigitalOcean Holdings, Inc. is an American multinational technology company and cloud service provider.",
		level: 90,
		icon: (
			<DigitalOceanIcon className="h-7 w-7 text-black dark:text-white" />
		),
		technology: "version",
		type: ["all", "server", "others"],
	},
];

export const testimonials: Testimonial[] = [
	{
		name: "Eleven",
		username: "eleven5",
		description:
			"Thank you very much! Very fast delivery and perfect work! He is a great guy. Will keep in touch with him.",
		country: "Germany",
		date: "20 Jun 2022",
	},
	{
		name: "Ddammar Telletti",
		username: "adammartelletti",
		description:
			"Ibrahim has done a great job, very responsive and quick to get the job done. He was quick to troubleshoot and fix an issue due to a small problem due to miss communication or confusion which came from me. Perfect service and would recommend him to anyone and will use again.",
		country: "Australia",
		date: "20 Jun 2022",
	},
	{
		name: "Jay Raffa",
		username: "mwnjason",
		description:
			"Great communicator and assuring me myself and client will be supported in the future when we need we will know where to go for the help. We had some bugs to work out but has been cooperative throughout the process great fiverr seller. ",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Asim Khan",
		username: "asimkhan234",
		description: "Great job. Highly recommend. ",
		country: "Germany",
		date: "20 Jun 2022",
	},
	{
		name: "Ghazanfar Abbas",
		username: "ghazanfar_786",
		description:
			"He is very pro developer i found so far and i work with him again and again surely.",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Asim Khan",
		username: "asimkhan234",
		description: "Good work!",
		country: "Germany",
		date: "20 Jun 2022",
	},

	{
		name: "Ghazanfar Abbas",
		username: "ghazanfar_786",
		description:
			"He is very professional developer i always found him best and he is recommened for all type of web developments work . Great Job Ibrahim. ",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Wordsia",
		username: "wordsia",
		description: "Great Service!",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Rewmitchell",
		username: "rewmitchell",
		description:
			"What a legend. He solved my difficult issue with no problem at all. Created me a custom plugin for wordpress. He's very polite and easy to communicate with. I highly recommend him!",
		country: "United Kingdom",
		date: "20 Jun 2022",
	},
	{
		name: "Asim Khan",
		username: "asimkhan234",
		description: "Strongly recommended.",
		country: "Germany",
		date: "20 Jun 2022",
	},
	{
		name: "Lohiwy",
		username: "lohiwy",
		description:
			"Excellent work, very good communication and wordpress skills. Recommend anyone who wants any customization on wordpress.",
		country: "Italy",
		date: "20 Jun 2022",
	},
	{
		name: "Asim Khan",
		username: "asimkhan234",
		description:
			"Very talented person. I will strongly recommend. Thank you.",
		country: "Germany",
		date: "20 Jun 2022",
	},
	{
		name: "Asim Khan",
		username: "asimkhan234",
		description: "Again good work.",
		country: "Germany",
		date: "20 Jun 2022",
	},
	{
		name: "Asim Khan",
		username: "asimkhan234",
		description: "very talented person. strongly recommended.",
		country: "Germany",
		date: "20 Jun 2022",
	},
	{
		name: "Busava",
		username: "busava",
		description:
			"Very skilled wordpress developer. He is always available and try to satisfy all the requests. Worked good both with backend and frontend technologies.",
		country: "Italy",
		date: "20 Jun 2022",
	},
	{
		name: "Milomidia Social",
		username: "milomidiasocial",
		description:
			"The best programmer I know. I recommend it and I'm already a partner.",
		country: "Brazil",
		date: "20 Jun 2022",
	},
	{
		name: "Milomidia Social",
		username: "milomidiasocial",
		description:
			"Very good professional. delivered before the deadline. I will do business with him again.",
		country: "Brazil",
		date: "20 Jun 2022",
	},
	{
		name: "David Sam",
		username: "davidsam10",
		description:
			"Ibrahim is a pro when it comes to Woo commerce customization. I would highly recommend him to anyone who needs customization.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Harry Stymiest",
		username: "harrystymiest",
		description: "Does amazing work.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Harry Stymiest",
		username: "harrystymiest",
		description: "This plugin didn't exist and he made it happen.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Ghazanfar Abbas",
		username: "ghazanfar_786",
		description:
			"He is very intelligent person i really happy to work with thank you boy for your outstanding work.",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Harry Stymiest",
		username: "harrystymiest",
		description: "Went above and beyonf.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Ddammar Telletti",
		username: "adammartelletti",
		description:
			"Ibrahim has done a great job, very responsive and quick to get the job done. He was quick to troubleshoot and fix an issue due to a small problem due to miss communication or confusion which came from me. Perfect service and would recommend him to anyone and will use again.",
		country: "Australia",
		date: "20 Jun 2022",
	},
	{
		name: "Ghazanfar Abbas",
		username: "ghazanfar_786",
		description:
			"He is real Gem and pro developer Really Best Experience to working we go for long term working relationship . Thank you man.",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Harry Stymiest",
		username: "harrystymiest",
		description: "Did excellent work exactly what I asked for.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Addyvey",
		username: "addyvey",
		description:
			"Super experience again Work Perfectly fast and good explain Thanks for have find my last issue The PHP have not secret for him stuning service Thanks.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Addyvey",
		username: "addyvey",
		description:
			"Excellent work I recommend again him I will sollicite him for others task Really Thanks.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Addyvey",
		username: "addyvey",
		description:
			"Ibrahim Is genious men, understand so quiclky and follow the job perfeclty I recommand him for your task For sure i will process futur mission with him Polite , fast , smart and really so kind this guy is futur Bill Gates Thanks Men You are the Best.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Ghazanfar Abbas",
		username: "ghazanfar_786",
		description: "Best Plugin Developer . recommended.",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Click4corp",
		username: "click4corp",
		description: "Great service again.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Dave",
		username: "dave_a434",
		description:
			"Excellent, would highly recommend and will definitely use him again. Very polite, helpful and excellent at what he does. Thank you.",
		country: "United Kingdom",
		date: "20 Jun 2022",
	},
	{
		name: "Sshish Soutiyal",
		username: "ashishsoutiyal",
		description:
			"At time delivery with nice touches. Delivered the product as expected. Recommended.",
		country: "India",
		date: "20 Jun 2022",
	},
	{
		name: "Visiontour",
		username: "visiontour",
		description:
			"Very professional, on time and also he has a very good taste for design. He knows what he is doing and he communicate s very well for any of your technical requirement. Definitely recommend him.",
		country: "Canada",
		date: "20 Jun 2022",
	},
	{
		name: "Ghazanfar Abbas",
		username: "ghazanfar_786",
		description:
			"Professional plugin Developer, I am really happy with the delivery. Thank you.",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Jsberman",
		username: "jsberman",
		description: "Very easy, communicated well and efficient.",
		country: "South Africa",
		date: "20 Jun 2022",
	},
	{
		name: "Click4corp",
		username: "click4corp",
		description: "Very helpful and got exactly what we needed done.",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Jagobanglira",
		username: "jagobanglira",
		description:
			"A brilliant programmer that has the potential to handle even the most challenging project. I will be working with him again.",
		country: "Bangladesh",
		date: "20 Jun 2022",
	},
	{
		name: "Digitalmarka",
		username: "digitalmarka",
		description:
			"The developer was very responsive and worked hard to deliver this plugin on a tight deadline. The plugin turned out great and worked exactly as promised. Will definitely work with this developer again!",
		country: "United Status",
		date: "20 Jun 2022",
	},
	{
		name: "Bellbrand",
		username: "bellbrand",
		description: "Great. On time and good product.",
		country: "Palestine",
		date: "20 Jun 2022",
	},
	{
		name: "Bellbrand",
		username: "bellbrand",
		description: "Professional and helpful, delivered with excellence.",
		country: "Palestine",
		date: "20 Jun 2022",
	},
	{
		name: "Zahid Sarfraz",
		username: "zahidsarfraz495",
		description: "Great service with polite communication.",
		country: "Pakistan",
		date: "20 Jun 2022",
	},
	{
		name: "Bakar",
		username: "bakar686",
		description:
			"I would like to thank him for his service and corporation.",
		country: "Qatar",
		date: "20 Jun 2022",
	},
	{
		name: "Elfatry",
		username: "elfatry",
		description: "Good seller, I recommend.",
		country: "Morocco",
		date: "20 Jun 2022",
	},
	{
		name: "Soufian Amayour",
		username: "soufianamayour",
		description:
			"Very good customer service and did a very good job revamping our website! Super happy with it. Would recommend and will use him again for any future jobs!!!.",
		country: "Morocco",
		date: "20 Jun 2022",
	},
	{
		name: "Shopgreco",
		username: "shopgreco",
		description: "I am satisfied with the support and delivery.",
		country: "Serbia",
		date: "20 Jun 2022",
	},
	{
		name: "Soufian Amayour",
		username: "soufianamayour",
		description: "Fast delivery thank you.",
		country: "Morocco",
		date: "20 Jun 2022",
	},
	{
		name: "Erhards",
		username: "erhards",
		description: "Very quick response and turnaround! Highly recommend!.",
		country: "Saudi Arabia",
		date: "20 Jun 2022",
	},
	{
		name: "Hachouma",
		username: "hachouma",
		description: "Great seller . thank you so much.",
		country: "Tunisia",
		date: "20 Jun 2022",
	},
];

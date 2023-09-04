"use client";
import React, { Fragment, useEffect, useState } from "react";
import {
	Airplay,
	Facebook,
	PlaneTakeoffIcon,
	Terminal,
	Twitch,
} from "lucide-react";
import { useMotionValue } from "framer-motion";

import { Button, DownloadButton } from "@/components/Button";
// import { ArrowDownIcon } from "lucide-react";
import BlurImage from "@/components/BlurImage";
import { Prose } from "@/components/Prose";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/Card";
import { Animator, Motion } from "@/components/Contents";
import { GOOGLE_APP_ENDPOINT, cn, truncate } from "@/lib/utils";

import logoAnimaginary from "@/images/logos/animaginary.svg";
import logoCosmos from "@/images/logos/cosmos.svg";
import logoHelioStream from "@/images/logos/helio-stream.svg";
import logoOpenShuttle from "@/images/logos/open-shuttle.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";

import {
	MailIcon,
	BriefcaseIcon,
	ArrowDownIcon,
	CheckIcon,
} from "@/components/Icons";
import { ResourcePattern } from "@/components/Resources";
import { imageList, projectsList, resumes } from "@/lib/const";
import { fadeIn, skillsContainer, textVariant } from "@/utils/motion";
import Link from "next/link";
import { newsLetterSchema } from "@/lib/validator";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { LoadingCircle } from "./animation/Loading";
import axios from "@/lib/axios";

interface Newsletter {}
export const Newsletter: React.FC<Newsletter> = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<z.infer<typeof newsLetterSchema>>({
		resolver: zodResolver(newsLetterSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof newsLetterSchema>) => {
		let form = new FormData();
		form.append("email", values.email);
		try {
			setLoading(true);
			const request = await fetch(GOOGLE_APP_ENDPOINT, {
				method: "POST",
				body: form,
			});
			const response = await request.json();
			if (response.success) {
				toast.success(`Thank you for subscribing to our newsletters!`);
			} else {
				toast.error("Something went wrong!");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Prose enable={false}>
			<Motion
				// variants={textVariant(0.15 * 1)}
				variants={fadeIn("left", "spring", 0.5, 0.75)}
				initial="hidden"
				whileInView="show"
				className={cn("")}
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-background dark:bg-background/20"
					>
						<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
							<MailIcon className="h-6 w-6 flex-none" />
							<span className="ml-3">Stay up to date</span>
						</h2>
						<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
							Get notified when I publish something new, and
							unsubscribe at any time.
						</p>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<Fragment>
									<FormControl>
										<Fragment>
											<div className="pb-2 mt-4 flex">
												<input
													disabled={loading}
													placeholder="Email address"
													aria-label="Email address"
													className={cn(
														"min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/10 sm:text-sm"
													)}
													{...field}
												/>

												<Button
													className="ml-4 rounded-md shadow-md"
													variant="outline"
												>
													{loading ? (
														<LoadingCircle className="h-5 w-5" />
													) : (
														<PaperAirplaneIcon className="h-5 w-5" />
													)}
												</Button>
											</div>
											<FormMessage />
										</Fragment>
									</FormControl>
								</Fragment>
							)}
						/>
						{/* <div className="mt-6 flex">
							<input
								type="email"
								placeholder="Email address"
								aria-label="Email address"
								required
								className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/10 sm:text-sm"
							/>

							<Button
								className="ml-4 rounded-md shadow-md"
								variant="outline"
							>
								<PaperAirplaneIcon className="h-5 w-5" />
							</Button>
						</div> */}
					</form>
				</Form>
			</Motion>
		</Prose>
	);
};

export const Resume: React.FC<Newsletter> = () => {
	return (
		<Motion
			// variants={textVariant(0.15 * 1)}
			variants={fadeIn("left", "spring", 0.5, 0.75)}
			initial="hidden"
			whileInView="show"
			className={cn(
				"not-prose",
				"rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-background dark:bg-background/20"
			)}
		>
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Work</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{resumes.map((role: any, roleIndex: any) => (
					<li key={roleIndex} className="flex gap-4">
						<div className="relative overflow-hidden mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
							{typeof role.logo == "function" ? (
								<role.logo />
							) : (
								role.logo
							)}
						</div>
						<dl className="flex flex-auto flex-wrap gap-x-2">
							<dt className="sr-only">Company</dt>
							<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
								{role.company}
							</dd>
							<dt className="sr-only">Role</dt>
							<dd className="text-xs text-zinc-500 dark:text-zinc-400">
								{role.title}
							</dd>
							<dt className="sr-only">Date</dt>
							<dd
								className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
								aria-label={`${
									role.start.label ?? role.start
								} until ${role.end.label ?? role.end}`}
							>
								<time
									dateTime={role.start.dateTime ?? role.start}
								>
									{role.start.label ?? role.start}
								</time>{" "}
								<span aria-hidden="true">—</span>{" "}
								<time dateTime={role.end.dateTime ?? role.end}>
									{role.end.label ?? role.end}
								</time>
							</dd>
						</dl>
					</li>
				))}
			</ol>
			<DownloadButton
				href="/cv.pdf"
				variant="secondary"
				className="group mt-6 w-full"
			>
				Download CV
				<ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</DownloadButton>
		</Motion>
	);
};

export function Photos({ shadow = true, ...props }: { shadow?: boolean }) {
	const [images, setImages] = useState(imageList);

	useEffect(() => {
		setInterval(() => {
			const filter = imageList.filter(
				(item) => Math.floor(Math.random() * (999 - 1) + 1) % 2
			);
			setImages(filter);
		}, 5000);
	}, []);

	return (
		<div className="relative my-16 sm:my-20 md:py-5 py-3 overflow-hidden">
			{shadow && (
				<Fragment>
					<div className="md:-right-2 -right-1 bg-gradient-to-l from-background from-1% via-background/1 via-15% to-transparent to-100% pointer-events-none absolute inset-0 z-10"></div>
					<div className="md:-right-2 -right-1 bg-gradient-to-l from-background from-1% via-background/1 via-15% to-transparent to-100% pointer-events-none absolute inset-0 z-10"></div>
					<div className="md:-left-2 -left-1 bg-gradient-to-r from-background from-1% via-background/1 via-15% to-transparent to-100% pointer-events-none absolute inset-0 z-10"></div>
					<div className="md:-left-2 -left-1 bg-gradient-to-r from-background from-1% via-background/1 via-15% to-transparent to-100% pointer-events-none absolute inset-0 z-10"></div>
				</Fragment>
			)}
			<Motion
				layout
				className={cn(
					"-my-4 flex justify-center gap-5 py-4 sm:gap-8 "
					// "overflow-hidden",
				)}
			>
				<Animator>
					{images.map((image, imageIndex) => (
						<Motion
							initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
							animate={{
								opacity: 1,
								scale: 1,
								rotate: imageIndex % 2 == 1 ? 3 : -3,
							}}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
							exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
							layout
							key={image.id}
							className={cn(
								"relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
								// rotations[imageIndex % rotations.length]
							)}
						>
							<BlurImage
								src={image.src}
								alt="Mohammad Ibrahim"
								sizes="(min-width: 640px) 18rem, 11rem"
								className="absolute inset-0 h-full w-full object-cover"
								fill
								priority
							/>
						</Motion>
					))}
				</Animator>
			</Motion>
		</div>
	);
}

function LinkIcon({ ...props }) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function ProjectList() {
	const [projects, setProjects] = useState(projectsList);

	useEffect(() => {
		setInterval(() => {
			const filter = projectsList.filter(
				(item) => Math.floor(Math.random() * (999 - 1) + 1) % 2
			);
			// setProjects(filter);
		}, 5000);
	}, []);

	return (
		<Motion
			layout
			variants={skillsContainer}
			className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-10"
		>
			<Animator>
				{projects.map((project, i) => (
					<Motion
						as="article"
						className="relative"
						key={project.name + i}
						variants={textVariant(0.15)}
						initial="hidden"
						whileInView="show"
					>
						<span className="inline-flex gap-0.5 justify-center items-center overflow-hidden text-[8px] font-medium transition rounded-full bg-zinc-900 leading-none py-1.5 px-1.5 text-white hover:bg-zinc-700 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-1 dark:ring-inset dark:ring-primary-400/20 dark:hover:bg-primary-400/10 dark:hover:text-primary-300 dark:hover:ring-primary-300 absolute right-2 top-0 z-[12] pointer-events-none capitalize">
							{project.type ? project.type : "private"}
						</span>
						<div className="md:p-2 p-4 group relative flex flex-col items-start">
							<div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-50 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl rounded-md max-sm:shadow-lg max-sm:border border-opacity-50" />
							<div className="relative min-h-[20rem] overflow-clip w-full">
								<span className="absolute -inset-y-6 -inset-x-4 z-[11] sm:-inset-x-6 sm:rounded-2xl rounded-md  " />
								<div className="relative flex flex-col justify-between z-[15] min-h-[20rem] overflow-clip">
									<div className="relative ">
										<div className="flex items-center mb-4 space-x-4">
											<div className="space-y-1 font-medium dark:text-white">
												<h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
													{`${project.name} `}
												</h3>
											</div>
										</div>
										<h3 className="text-sm font-normal text-gray-900 dark:text-white">
											{project.description}
										</h3>
									</div>
									<div className="relative ">
										<div className="relative">
											<p className="relative z-10 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-primary-500 dark:text-zinc-200">
												<Terminal className="h-4 w-4 flex-none" />
												<span className="ml-2">
													Role
												</span>
											</p>
											<ul className="max-w-md flex flex-wrap text-gray-500 list-inside dark:text-gray-400">
												{/* <li className="flex items-center">
													<CheckIcon className="text-gray-500 dark:text-gray-400 " />
													At least one special
													character, e.g., ! @ # ?
												</li> */}
												{project.role
													?.slice(0, 4)
													?.map((position, i) => (
														<li
															key={i}
															className="flex items-center mr-1.5 mt-1.5 capitalize"
														>
															<CheckIcon className="text-gray-500 dark:text-gray-400 " />
															{/* <CheckIcon /> */}
															{position}
														</li>
													))}
											</ul>
										</div>
										{project.link &&
											project.type == "public" && (
												<a
													href={project.link.href}
													target="_blank"
													className="relative z-10 my-2 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-500 dark:text-zinc-200"
												>
													<LinkIcon className="h-6 w-6 flex-none" />
													<span className="ml-2">
														{project.link.label}
													</span>
												</a>
											)}
										<div className="flex flex-wrap">
											{project.tags?.map((tag, i) => (
												<Button
													variant="outline"
													key={i}
													className=" mr-1 my-1 text-[10px] leading-none py-1.5 px-1.5 z-[12] pointer-events-none capitalize"
												>
													{tag}
												</Button>
											))}
										</div>
									</div>
								</div>

								<div className="absolute inset-0 z-[1]">
									<Motion className="relative flex items-start justify-center aspect-[1/1] w-full opacity-15">
										<div
											className="h-full w-full aspect-[1/1] bg-cover bg-[-35px_15px] [mask-image:url('/mask2.png')] [mask-size:100%] [mask-repeat:no-repeat] [mask-position:top] bg-slate-400"
											style={{
												// backgroundImage:
												// 	"url('https://github.com/shadcn.png')",
												backgroundImage: project.logo
													? `url('/projects/${project.logo}')`
													: "url('/avatar.jpg')",
												// backgroundImage:
												// 	"url('/avatar.jpg')",
											}}
										></div>
									</Motion>
								</div>
								{project.year && (
									<Button
										variant="outline"
										key={i}
										className=" mr-1 my-1 text-[10px] leading-none py-1.5 px-1.5 pointer-events-none absolute right-2 bottom-0 z-[12] "
									>
										{project.year}
									</Button>
								)}
							</div>
						</div>
					</Motion>
				))}
				{/* {projects.map((project, i) => (
					<Motion
						className="relative"
						data-title={project.name}
						layout
						key={project.name}
						variants={textVariant(0.15 * i)}
						initial="hidden"
						whileInView="show"
					>
						<Card className="md:p-2 p-4 min-h-[20rem]">
							<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
								<BlurImage
									src={project.logo}
									alt={project.name}
									className="h-8 w-8"
									height={400}
									width={400}
								/>
							</div>
							<h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
								<Card.Link
									href={project.link.href}
									className="text-slate-600 hover:text-black dark:text-white no-underline"
								>
									{project.name}
								</Card.Link>
							</h2>
							<Card.Description>
								{truncate(project.description, 60)}
							</Card.Description>
							<p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-500 dark:text-zinc-200">
								<LinkIcon className="h-6 w-6 flex-none" />
								<span className="ml-2">
									{project.link.label}
								</span>
							</p>
						</Card>
					</Motion>
				))} */}
			</Animator>
		</Motion>
	);
}

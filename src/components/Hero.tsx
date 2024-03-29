"use client";
import { cn } from "@/lib/utils";
import React, { Fragment } from "react";

const Hero = () => {
	return (
		<Fragment>
			<div className="absolute inset-0 -z-10 mx-auto max-w-7xl ">
				<div className="relative overflow-hidden  max-sm:opacity-0">
					<div className="bg-gradient-to-l from-indigo-500/1 from-5% via-indigo-500/20 via-50% to-transparent to-90% pointer-events-none absolute inset-0  opacity-50 dark:hidden"></div>
					<div className="relative flex justify-end items-end lg:h-[35rem] md:h-[38rem] h-[34rem]">
						<div className="lg:w-1/2 md:w-[40%] w-[15%] h-[1px] bg-gradient-to-l from-primary-500 from-5% via-primary-300/40 via-30% to-transparent to-90% "></div>
						<div className="lg:w-1/2 md:w-[60%] w-[85%]">
							<svg
								preserveAspectRatio="none"
								viewBox="0 0 960 320"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M178.507 305.111C131.659 323.63 100.966 315.481 66.2333 315.481C31.501 315.481 31 320 0 320H960V10H863.5C841.291 10 824.689 80.111 811.765 79.185C798.842 78.2591 793.995 63.658 785.918 64.3702C772.187 65.581 760.878 119.778 738.262 138.444C729.132 145.98 720.124 136.093 712.415 144C697.068 159.741 700.299 184.741 691.414 192.148C682.529 199.555 677.683 191.222 665.567 195.852C653.451 200.481 652.643 206.037 642.143 211.592C631.642 217.148 630.027 215.296 616.295 225.481C602.564 235.667 600.141 247.704 588.025 247.704C575.909 247.704 573.486 225.481 560.562 225.481C547.639 225.481 537.946 269.926 487.867 269.926C475.751 269.926 475.751 254.905 465.25 249.555C457.981 245.852 452.327 246.778 441.018 246.778C429.71 246.778 426.479 271.778 413.556 271.778C400.632 271.778 398.209 256.037 389.324 256.037C382.055 256.037 380.439 267.148 364.285 277.333C356.662 282.139 337.63 277.333 319.86 277.333C302.09 277.333 305.32 300.481 291.589 300.481C277.858 300.481 272.204 287.518 261.703 287.518C243.933 287.518 231.817 304.988 218.086 306.037C193.854 307.889 193.51 299.181 178.507 305.111Z"
									fill="url(#gradient-fill-chart)"
								></path>
								<path
									d="M0 319.5C31 319.5 44.5923 315.481 66.2333 315.481C100.966 315.481 131.659 323.63 178.507 305.111C193.51 299.181 193.854 307.889 218.086 306.037C231.817 304.988 243.933 287.518 261.703 287.518C272.204 287.518 277.858 300.481 291.589 300.481C305.32 300.481 302.09 277.333 319.86 277.333C337.63 277.333 356.662 282.139 364.285 277.333C380.439 267.148 382.055 256.037 389.324 256.037C398.209 256.037 400.632 271.778 413.556 271.778C426.48 271.778 429.71 246.778 441.018 246.778C452.327 246.778 457.981 245.852 465.25 249.555C475.751 254.905 475.751 269.926 487.867 269.926C537.946 269.926 547.639 225.481 560.562 225.481C573.486 225.481 575.909 247.704 588.025 247.704C600.141 247.704 602.564 235.667 616.295 225.481C630.027 215.296 631.642 217.148 642.143 211.592C652.643 206.037 653.451 200.481 665.567 195.852C677.683 191.222 682.529 199.555 691.414 192.148C700.299 184.741 697.068 159.741 712.415 144C720.124 136.093 729.132 145.98 738.262 138.444C760.878 119.778 772.187 65.581 785.918 64.3702C793.995 63.658 798.842 78.2591 811.765 79.185C824.689 80.111 841.291 10 863.5 10"
									stroke="url(#gradient-line)"
									vectorEffect="non-scaling-stroke"
									strokeWidth="1"
								></path>
								<line
									x1="862"
									y1="10"
									x2="862.01"
									y2="10"
									vectorEffect="non-scaling-stroke"
									stroke="currentColor"
									strokeLinecap="round"
									className="md:stroke-[8] z-20 stroke-[5] animate-pulse"
								></line>
								<line
									x1="862"
									y1="10"
									x2="862.01"
									y2="10"
									vectorEffect="non-scaling-stroke"
									stroke="currentColor"
									strokeLinecap="round"
									className="relative md:stroke-[8] stroke-[5] animate-pulse z-10 pointer-events-none text-blue-500 dark:text-white "
								></line>
								<defs>
									<linearGradient
										id="gradient-fill-chart"
										x1="960"
										y1="10"
										x2="960"
										y2="319"
										gradientUnits="userSpaceOnUse"
										className="text-[hsl(var(--background))]"
									>
										<stop
											offset="0"
											stopColor="currentColor"
										></stop>
										<stop
											offset="0.7"
											stopColor="currentColor"
										></stop>
									</linearGradient>
									<linearGradient
										id="gradient-line"
										x1="73"
										y1="320"
										x2="900"
										y2="359.5"
										gradientUnits="userSpaceOnUse"
									>
										<stop
											offset="0"
											stopColor="#6366f1"
										></stop>
										<stop
											offset="1"
											stopColor="#6366f1"
										></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export const Pattern = ({ className, ...props }: { className?: string }) => {
	return (
		<Fragment>
			<div
				className={cn(
					"absolute inset-0 -z-10 mx-0 max-w-full overflow-hidden",
					className
				)}
				{...props}
			>
				<div className="absolute left-1/2 top-0 ml-[-38rem] h-[42rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
					<div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-200 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-400/30 dark:to-primary-200/30 dark:opacity-100"></div>
					<svg
						viewBox="0 0 1113 440"
						aria-hidden="true"
						className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-primary-400/10 blur-[26px] hidden"
					>
						<path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
					</svg>
				</div>
			</div>
		</Fragment>
	);
};
export default Hero;

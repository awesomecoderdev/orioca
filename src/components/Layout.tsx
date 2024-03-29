"use client";

import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

import { Prose } from "@/components/Prose";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";
import { Footer } from "@/components/Footer";
// import TagManager from "react-gtm-module";

export function Layout({ children = null }: LayoutProps) {
	const pathname = usePathname();

	// useEffect(() => {
	// 	// google tag manager
	// 	TagManager.initialize({
	// 		gtmId: "GTM-K69DMNQ",
	// 	});
	// }, []);

	return (
		<Fragment>
			<motion.header
				layoutScroll
				className={cn("relative z-40 contents px-6 pt-4 pb-8 ")}
			>
				<Header />
			</motion.header>
			<Prose
				as="main"
				className={cn(
					"relative min-h-[calc(100vh-75px)] pt-24 lg:px-8 sm:px-7 xs:px-5 px-4 xl:overflow-visible overflow-hidden"
				)}
			>
				{pathname == "/" && <HeroPattern />}

				<AnimatePresence initial={false}>{children}</AnimatePresence>
			</Prose>
			<Footer
				// className={cn("absolute w-full bottom-0")}
				className="py-6 lg:mt-10"
			/>
		</Fragment>
	);
}

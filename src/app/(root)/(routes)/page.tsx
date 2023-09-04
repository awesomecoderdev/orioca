"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useAlertModal } from "@/hooks/use-alert-modal";
import Contents, { Animator, Motion } from "@/components/Contents";
import { cn, truncate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useScroll, useTransform } from "framer-motion";

export default function Home() {
	const { onOpen } = useAlertModal();
	const router = useRouter();
	const profileRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		layoutEffect: false,
		target: profileRef,
		offset: ["start start", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0.05, 0.5], [1.15, 1.1]);
	const opacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0.95]);

	return (
		<Contents>
			<Motion as="section" className="relative">
				<p className="text-4xl text-primary-50">Lorem ipsum dolor </p>
				<p className="text-4xl text-primary-100">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-200">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-300">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-400">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-500">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-600">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-700">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-800">Lorem ipsum dolor</p>
				<p className="text-4xl text-primary-900">Lorem ipsum dolor</p>
			</Motion>
		</Contents>
	);
}

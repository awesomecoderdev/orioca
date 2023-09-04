import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn, constructMetadata } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata({
	title: "Mohammad Ibrahim",
	description:
		"I will make your visions become reality, and I love what I do. Since beginning my journey as a web developer nearly 4 years ago, I've done remote work for agencies, consulted for startups.",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					// "text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900",
					inter.className
				)}
			>
				{children}
			</body>
		</html>
	);
}

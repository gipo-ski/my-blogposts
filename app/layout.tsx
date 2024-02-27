import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";
import MyProfilePic from "./components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Blog",
	description: "Created by GIPOSKI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-red-500 dark:bg-slate-800 flex-col mb-10`}
      >
        <Nav />
        <MyProfilePic />
				{children}
			</body>
		</html>
	);
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import NavSheet from "./nav-sheet";

import { LogIn } from "lucide-react";

function MobileNav() {
	return (
		<header className="sticky bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg md:hidden top-0 left-0 w-screen shadow-xl shadow-purple-100 p-4 flex items-center justify-between gap-8">
			<Image
				src={"/assets/images/logo-text.svg"}
				alt="logo"
				width={140}
				height={32}
			/>

			<nav className="flex items-center gap-4">
				<SignedIn>
					<UserButton />
					<NavSheet />
				</SignedIn>
				<SignedOut>
					<Link
						href={"/sign-in"}
						className="bg-purple-gradient hover:bg-purple-500 flex items-center px-4 py-2 rounded-lg text-sm text-white"
					>
						<LogIn className="size-5 mr-2" />
						<span>sign in</span>
					</Link>
				</SignedOut>
			</nav>
		</header>
	);
}

export default MobileNav;

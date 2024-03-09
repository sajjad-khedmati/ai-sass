"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import NavSheet from "./nav-sheet";

function MobileNav() {
	return (
		<header className="sticky bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg md:hidden top-0 left-0 w-screen shadow p-4 flex items-center justify-between gap-8">
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
			</nav>
		</header>
	);
}

export default MobileNav;

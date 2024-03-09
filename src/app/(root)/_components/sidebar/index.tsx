"use client";

import { navItems } from "@/constants/nav-items";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserRoundSearch } from "lucide-react";

function Sidebar() {
	return (
		<aside className="py-2 px-4 w-72 shadow hidden md:flex flex-col gap-4">
			<Link href={"/"} className="sidebar-logo">
				<Image
					src="/assets/images/logo-text.svg"
					alt="logo"
					width={180}
					height={28}
				/>
			</Link>

			<nav className="flex flex-col justify-between flex-1">
				<SignedIn>
					<ul className="flex flex-col gap-1">
						{navItems.slice(0, 6).map((navItem) => (
							<SidebarItem key={navItem.route} item={navItem} />
						))}
					</ul>

					<ul className="flex flex-col justify-between gap-1">
						{navItems.slice(6).map((navItem) => (
							<SidebarItem key={navItem.route} item={navItem} />
						))}

						<li className="px-4 py-3">
							<UserButton afterSignOutUrl="/" showName />
						</li>
					</ul>
				</SignedIn>

				<SignedOut>
					<Button className="bg-purple-gradient hover:bg-purple-600" asChild>
						<SignInButton afterSignInUrl="/" />
					</Button>
				</SignedOut>
			</nav>
		</aside>
	);
}

export default Sidebar;

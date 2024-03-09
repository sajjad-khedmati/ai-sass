import React from "react";
import Sidebar from "./_components/sidebar";
import MobileNav from "./_components/mobile-nav";

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col md:flex-row md:gap-4 gap-2 md:h-screen">
			<Sidebar />
			<MobileNav />
			<section className="flex-1 container">{children}</section>
		</main>
	);
}

export default RootLayout;

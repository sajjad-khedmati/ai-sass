import Image from "next/image";
import { navItems } from "@/constants/nav-items";
import SidebarItem from "../sidebar/sidebar-item";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

function NavSheet() {
	return (
		<Sheet>
			<SheetTrigger>
				<Image
					src={"/assets/icons/menu.svg"}
					alt="menu"
					width={32}
					height={32}
					className="cursor-pointer"
				/>
			</SheetTrigger>
			<SheetContent side={"right"}>
				<SheetHeader>
					<SheetTitle>
						<Image
							src={"/assets/images/logo-text.svg"}
							alt="logo"
							width={160}
							height={32}
						/>
					</SheetTitle>
				</SheetHeader>

				<div className="mt-8">
					<ul className="flex flex-col gap-2">
						{navItems.map((item) => (
							<SidebarItem key={item.route} item={item} />
						))}
					</ul>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default NavSheet;

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
	item: {
		route: string;
		label: string;
		icon: string;
	};
}
function SidebarItem({ item }: SidebarItemProps) {
	const pathname = usePathname();
	const isActive: boolean = item.route === pathname;
	return (
		<li
			className={`rounded-xl hover:bg-purple-100 transition-colors duration-200 group ${
				isActive ? "bg-purple-gradient text-white" : "text-gray-700"
			}`}
		>
			<Link className="flex items-center gap-4 py-3 px-4" href={item.route}>
				<Image
					src={item.icon}
					alt={item.route}
					width={24}
					height={24}
					className={`${isActive && "brightness-200"}`}
				/>

				<span>{item.label}</span>
			</Link>
		</li>
	);
}

export default SidebarItem;

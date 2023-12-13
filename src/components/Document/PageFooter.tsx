import { Feedback } from "../others/Feedback";
import { DocLink } from ".";
import {
	BadgeHelpIcon,
	LucideIcon,
	ScrollTextIcon,
	VideoIcon,
} from "lucide-react";
import { Subscribe } from "../others/Subscribe";
import { AutoEditPageButton } from "./AutoEditPageButton";

export function PageFooter(props: { editPageButton?: true }) {
	return (
		<footer className="flex flex-col gap-7 pb-8">
			<div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
				{props.editPageButton && <AutoEditPageButton />}
				<Feedback />
			</div>
			<div className="h-1 border-t"></div>
			<div className="flex flex-col justify-between gap-7 md:flex-row">
				<Links />
				<Subscribe />
			</div>
		</footer>
	);
}

function Links() {
	return (
		<ul className="flex flex-col gap-3">
			<FooterLinkItem
				prefix="Need help?"
				label="Contact Support"
				href="https://support.thirdweb.com/"
				icon={BadgeHelpIcon}
			/>

			<FooterLinkItem
				prefix="Watch our"
				label="Video Tutorials"
				href="https://www.youtube.com/@thirdweb_"
				icon={VideoIcon}
			/>

			<FooterLinkItem
				prefix="View our"
				label="Changelog"
				href="https://blog.thirdweb.com/changelog/"
				icon={ScrollTextIcon}
			/>
		</ul>
	);
}

function FooterLinkItem(props: {
	label: string;
	href: string;
	prefix: string;
	icon: LucideIcon;
}) {
	return (
		<li className="flex items-center gap-3 text-f-300">
			<div className="flex items-center gap-2">
				<props.icon className="h-5 w-5" />
				<span>{props.prefix}</span>
			</div>

			<DocLink href={props.href}>{props.label}</DocLink>
		</li>
	);
}
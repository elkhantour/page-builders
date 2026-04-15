import { ComponentPropsWithoutRef } from "react";

export default function Container({ children, className }: ComponentPropsWithoutRef<"div">) {
	return (<section className={`pl-7 pr-7 pb-20 ${className}`}>
		{children}
	</section>);
}

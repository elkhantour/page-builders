import ReactIcon from "@assets/icons/react.svg?react";
import PhpIcon from "@assets/icons/php.svg?react";
import LaravelIcon from "@assets/icons/laravel.svg?react";

/**
 * Map stack keywords → icons
 */
const stackIconMap: Record<string, React.ReactNode> = {
	react: <ReactIcon className="w-[24px]"/>,
	php: <PhpIcon className="w-[24px]"/>,
	laravel: <LaravelIcon className="w-[24px]"/>,
};

/**
 * Stack badge
 */
function StackBadge({ label }: { label: string }) {
	const key = label.toLowerCase();
	const icon = stackIconMap[key] ?? null;

	return (
		<span className="flex items-center gap-2 px-2 py-1 rounded-md bg-zinc-800 text-zinc-200 text-xs border border-zinc-300">
			{icon}
			{label}
		</span>
	);
}

/**
 * Stack list
 */
function StackList({ stack }: { stack: string[] }) {
	return (
		<div className="flex flex-wrap gap-2 mt-3">
			{stack.map((item) => (
				<StackBadge key={item} label={item} />
			))}
		</div>
	);
}

/**
 * Title section
 */
function BuilderTitle({ name }: { name: string }) {
	return (
		<h1 className="text-2xl font-semibold text-black/75 tracking-tight">
			{name}
		</h1>
	);
}

/**
 * Description section
 */
function BuilderDescription({ description }: { description: string }) {
	return (
		<h1 className="text-black mt-1 leading-relaxed max-w-2xl">
			{description}
		</h1>
	);
}

/**
 * MAIN COMPONENT
 */
type BuilderHeaderProps = {
	name?: string;
	description?: string;
	stack?: string[];
};

export default function BuilderHeader({
	name,
	description,
	stack,
}: BuilderHeaderProps) {
	return (
		<div className="mt-12 mb-8 w-full p-6 rounded-xl bg-zinc-100 border border-zinc-200 shadow-sm">
			{name && <BuilderTitle name={name} />}
			{description && <BuilderDescription description={description} />}
			{stack && <StackList stack={stack} />}
		</div>
	);
}

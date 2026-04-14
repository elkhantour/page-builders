export type ParseResult = {
	raw: string;
	markdown: string;
	html: string;
};

type Props = {
	data: ParseResult;
};

function Column({
	title,
	content,
}: {
	title: string;
	content: string;
}) {
	return (
		<div className="flex flex-col border border-black/10 rounded-md overflow-hidden bg-white">
			{/* Header */}
			<div className="px-3 py-2 bg-black/5 border-b border-black/10 text-sm font-medium">
				{title}
			</div>

			{/* Content */}
			<pre className="p-3 text-xs text-black/80 whitespace-pre-wrap break-words overflow-auto max-h-[400px]">
				{content || "—"}
			</pre>
		</div>
	);
}

export default function ParseResultTable({ data }: Props) {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-3xl">Parsed Results</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
				<Column title="Raw" content={data.raw} />
				<Column title="Markdown" content={data.markdown} />
				<Column title="HTML" content={data.html} />
			</div>

		</section>
	);
}

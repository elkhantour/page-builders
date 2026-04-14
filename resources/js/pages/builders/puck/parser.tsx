/**
 *
 * Quick and dirty AI generated JSON parser for testing purpose.
 * In production it would be wiser to handle this stage
 * in the backend.
 *
 */

type Block = {
	type: string;
	props: Record<string, any>;
};

export type PuckData = {
	content: Block[];
};

function escapeHtml(value: string = ""): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function escapeMarkdown(value: string = ""): string {
	return value.replace(/([\\`*_{}[\]()#+\-.!|>])/g, "\\$1");
}

function pxToHeadingPrefix(level: string): string {
	switch (level) {
		case "h1":
			return "#";
		case "h2":
			return "##";
		case "h3":
			return "###";
		case "h4":
			return "####";
		case "h5":
			return "#####";
		case "h6":
			return "######";
		default:
			return "#";
	}
}

const htmlRenderers: Record<string, (props: Record<string, any>) => string> = {
	HeadingBlock: ({ children = "", level = "h1", align = "left" }) => {
		const tag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(level) ? level : "h1";
		return `<${tag} style="text-align: ${escapeHtml(
			align
		)};">${escapeHtml(children)}</${tag}>`;
	},

	TextBlock: ({ text = "", color = "#333333", size = "16px" }) => {
		return `<p style="color: ${escapeHtml(color)}; font-size: ${escapeHtml(
			size
		)}; line-height: 1.6;">${escapeHtml(text)}</p>`;
	},

	ButtonBlock: ({ label = "Click me", href = "#", variant = "primary" }) => {
		const primary =
			variant === "primary"
				? `background:#111;color:#fff;border:1px solid #111;`
				: `background:#fff;color:#111;border:1px solid #111;`;

		return `<a href="${escapeHtml(
			href
		)}" style="display:inline-block;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600;${primary}">${escapeHtml(
			label
		)}</a>`;
	},

	ImageBlock: ({ src = "", alt = "", borderRadius = "12px" }) => {
		return `<img src="${escapeHtml(src)}" alt="${escapeHtml(
			alt
		)}" style="max-width:100%;display:block;border-radius:${escapeHtml(borderRadius)};" />`;
	},

	CardBlock: ({ title = "", description = "", image = "" }) => {
		return `
<div style="border:1px solid #e5e5e5;border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
  <img src="${escapeHtml(image)}" alt="${escapeHtml(
			title
		)}" style="width:100%;display:block;" />
  <div style="padding:16px;">
    <h3 style="margin-top:0;margin-bottom:8px;">${escapeHtml(title)}</h3>
    <p style="margin:0;color:#555;line-height:1.6;">${escapeHtml(description)}</p>
  </div>
</div>`.trim();
	},
};

const markdownRenderers: Record<string, (props: Record<string, any>) => string> = {
	HeadingBlock: ({ children = "", level = "h1" }) => {
		const prefix = pxToHeadingPrefix(level);
		return `${prefix} ${escapeMarkdown(children)}`;
	},

	TextBlock: ({ text = "" }) => {
		return escapeMarkdown(text);
	},

	ButtonBlock: ({ label = "Click me", href = "#" }) => {
		return `[${escapeMarkdown(label)}](${href})`;
	},

	ImageBlock: ({ src = "", alt = "" }) => {
		return `![${escapeMarkdown(alt)}](${src})`;
	},

	CardBlock: ({ title = "", description = "", image = "" }) => {
		return [
			`### ${escapeMarkdown(title)}`,
			image ? `![${escapeMarkdown(title)}](${image})` : "",
			escapeMarkdown(description),
		]
			.filter(Boolean)
			.join("\n\n");
	},
};

function renderBlockHtml(block: Block): string {
	const renderer = htmlRenderers[block.type];
	if (!renderer) {
		return `<!-- Unsupported block type: ${escapeHtml(block.type)} -->`;
	}
	return renderer(block.props || {});
}

function renderBlockMarkdown(block: Block): string {
	const renderer = markdownRenderers[block.type];
	if (!renderer) {
		return `<!-- Unsupported block type: ${block.type} -->`;
	}
	return renderer(block.props || {});
}

export function jsonToHtml(data: PuckData): string {
	if (!data?.content || !Array.isArray(data.content)) return "";
	return data.content.map(renderBlockHtml).join("\n\n");
}

export function jsonToMarkdown(data: PuckData): string {
	if (!data?.content || !Array.isArray(data.content)) return "";
	return data.content.map(renderBlockMarkdown).join("\n\n");
}

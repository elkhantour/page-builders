import placeholder from "@assets/placeholder.jpg";

// Quick and dirty AI generated
export const PUCK_CONFIG = {
	components: {
		HeadingBlock: {
			fields: {
				children: {
					type: "text",
				},
				level: {
					type: "select",
					options: [
						{ label: "H1", value: "h1" },
						{ label: "H2", value: "h2" },
						{ label: "H3", value: "h3" },
					],
				},
				align: {
					type: "select",
					options: [
						{ label: "Left", value: "left" },
						{ label: "Center", value: "center" },
						{ label: "Right", value: "right" },
					],
				},
			},
			defaultProps: {
				children: "Your heading here",
				level: "h1",
				align: "left",
			},
			render: ({ children, level = "h1", align = "left" }) => {
				const Tag = level;
				const textSize = {
					"h1": "text-8xl",
					"h2": "text-5xl",
					"h3": "text-2xl"
				};
				return <Tag style={{ textAlign: align }} className={textSize[level]}>{children}</Tag>;
			},
		},

		TextBlock: {
			fields: {
				text: {
					type: "textarea",
				},
				size: {
					type: "select",
					options: [
						{ label: "Small", value: "14px" },
						{ label: "Medium", value: "16px" },
						{ label: "Large", value: "20px" },
					],
				},
				color: {
					type: "text",
				},
			},
			defaultProps: {
				text: "Write some paragraph text here.",
				size: "16px",
				color: "#333333",
			},
			render: ({ text, size = "16px", color = "#333333" }) => {
				return (
					<p style={{ fontSize: size, color, lineHeight: 1.6, margin: 0 }}>
						{text}
					</p>
				);
			},
		},

		ButtonBlock: {
			fields: {
				label: {
					type: "text",
				},
				href: {
					type: "text",
				},
				variant: {
					type: "select",
					options: [
						{ label: "Primary", value: "primary" },
						{ label: "Secondary", value: "secondary" },
					],
				},
			},
			defaultProps: {
				label: "Click me",
				href: "#",
				variant: "primary",
			},
			render: ({ label, href, variant = "primary" }) => {
				const styles =
					variant === "primary"
						? {
							background: "#111",
							color: "#fff",
							border: "1px solid #111",
						}
						: {
							background: "#fff",
							color: "#111",
							border: "1px solid #111",
						};

				return (
					<a
						href={href}
						style={{
							display: "inline-block",
							padding: "12px 20px",
							borderRadius: "8px",
							textDecoration: "none",
							fontWeight: 600,
							...styles,
						}}
					>
						{label}
					</a>
				);
			},
		},

		ImageBlock: {
			fields: {
				src: {
					type: "text",
				},
				alt: {
					type: "text",
				},
				borderRadius: {
					type: "text",
				},
			},
			defaultProps: {
				src: placeholder,
				alt: "Placeholder image",
				borderRadius: "12px",
			},
			render: ({ src, alt, borderRadius = "12px" }) => {
				return (
					<img
						src={src}
						alt={alt}
						style={{
							width: "100%",
							maxWidth: "800px",
							display: "block",
							borderRadius,
						}}
					/>
				);
			},
		},

		CardBlock: {
			fields: {
				title: {
					type: "text",
				},
				description: {
					type: "textarea",
				},
				image: {
					type: "text",
				},
			},
			defaultProps: {
				title: "Card title",
				description: "This is a simple card component for your editor.",
				image: placeholder,
			},
			render: ({ title, description, image }) => {
				return (
					<div
						style={{
							border: "1px solid #e5e5e5",
							borderRadius: "16px",
							overflow: "hidden",
							background: "#fff",
							boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
						}}
					>
						<img
							src={image}
							alt={title}
							style={{ width: "100%", maxWidth: "500px", display: "block" }}
						/>
						<div style={{ padding: "16px" }}>
							<h3 style={{ marginTop: 0, marginBottom: "8px" }}>{title}</h3>
							<p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
								{description}
							</p>
						</div>
					</div>
				);
			},
		},
	},
};

import BuilderHeader from "@components/builder-header";
import { Puck, createUsePuck } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { PUCK_CONFIG } from "./config";
import { useState } from "react";
import { jsonToHtml, jsonToMarkdown, PuckData } from "./helper/parser";
import ParseResultTable from "./components/parse-result-table";
import Container from "@components/container";

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data) => {



};

const usePuck = createUsePuck();


// Render Puck editor
export default function Editor() {


	const change = (data: PuckData) => {
		setParseResult({
			raw: JSON.stringify(data.content),
			markdown: jsonToMarkdown(data),
			html: jsonToHtml(data),
		});
	};

	const [parseResult, setParseResult] = useState({
		raw: "",
		markdown: "",
		html: "",
	});

	return (<>
		<BuilderHeader label="Puck Editor" />

		<div className="flex flex-col gap-12">
			<Puck
				config={PUCK_CONFIG}
				data={initialData}
				onPublish={save}
				onChange={change}

				overrides={{
					headerActions: ({ children }) => {
						const appState = usePuck((s) => s.appState);

						return (
							<>
								{/*<button onClick={() => { save(appState.data); }} >
								Save
							</button>
						    */}

								{/* Render default header actions, such as the default Button */}
								{/*{children}*/}
							</>
						);
					},
				}}
			/>

			<Container>
				<ParseResultTable data={parseResult} />
			</Container>
		</div>
	</>);
}

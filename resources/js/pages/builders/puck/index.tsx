import BuilderHeader from "@components/builder-header";
import { Puck, createUsePuck } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { PUCK_CONFIG } from "./config";

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data) => {



};

const usePuck = createUsePuck();

// Render Puck editor
export default function Editor() {

	return (<>
		<BuilderHeader
			name="Puck Editor"
			link="https://puckeditor.com/"
			stack={["react", "php"]}
		/>
		<Puck
			config={PUCK_CONFIG}
			data={initialData}
			onPublish={save}
			overrides={{
				headerActions: ({ children }) => {
					const appState = usePuck((s) => s.appState);

					return (
						<>
							{/*<button
								onClick={() => { save(appState.data); }}
							>
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
	</>);
}

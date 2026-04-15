import { Editor, Frame, Element } from "@craftjs/core";
import BuilderHeader from '@components/builder-header';
import MainContainer from '@components/container';

import { TextBlock } from "./components/TextBlock";
import { ButtonBlock } from "./components/ButtonBlock";
import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";
import { Container } from "./components/Container";

export default function CraftJS() {

	return (
		<>
			<BuilderHeader label="Craft.js" />
			<MainContainer className="flex h-screen bg-slate-50 text-slate-900">
				<Editor
					resolver={{
						Container,
						TextBlock,
						ButtonBlock,
					}}
				>
					<Toolbox />

					<main className="flex-1 overflow-auto p-6">
						<div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<Frame>
								<Element is={Container} canvas padding={24} background="#ffffff">
									<TextBlock text="Hello Craft.js" fontSize={32} />
									<TextBlock
										text="Drag more blocks from the left panel."
										fontSize={16}
									/>
									<ButtonBlock text="Click me" />
								</Element>
							</Frame>
						</div>
					</main>

					<SettingsPanel />
				</Editor>
			</MainContainer>
		</>);

}

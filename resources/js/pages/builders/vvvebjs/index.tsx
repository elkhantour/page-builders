import 'grapesjs/dist/css/grapes.min.css';
import BuilderHeader from '@components/builder-header';

/**
 * Vvvebjs Editor implementation.
 * The Vvvebjs is in itself a quite complex and bundled environment with
 * its own js imports, php files, fixed position. In other word, it's been
 * designed to be used as a standalone page, not a module within a page.
 * For the sake of simplicity and experimentation we will embed it in an
 * IFrame.
 */
export default function VvvebJS() {

	return (
		<>
			<BuilderHeader label="Vvvebjs" />
			<iframe src="/builder/vvvebjs/iframe" className="w-full h-full border-0 aspect-video"></iframe>
		</>);

}

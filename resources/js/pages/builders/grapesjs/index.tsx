import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import { useEffect, useRef } from 'react';
import BuilderHeader from '@components/builder-header';

/**
 * GrapeJS Editor Vanilla JS implementation.
 * Note that the library also provide a React library
 * but for the sake of simplicity and ensure greater
 * compatibility with current backend stack we will use the
 * vanilla js version in this project.
 */
export default function GrapesJSEditor() {

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {

		if (ref.current) {

			const editor = grapesjs.init({
				container: '#gjs', // ID of your HTML element
				fromElement: true,
				height: '80vh',
				width: 'auto',
				storageManager: false, // Set to false to start without persistence
			});

		}

	}, [ref.current]);

	return (
		<>
			<BuilderHeader label="GrapesJS" />
			<div ref={ref} id="gjs"></div>
		</>);

}

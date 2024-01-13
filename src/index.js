/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const testimonialIcon = (
	<svg 
		viewBox="0 0 24 24" 
		xmlns="http://www.w3.org/2000/svg" 
		width="24" height="24" 
		aria-hidden="true" 
		focusable="false">
		<path d="M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z" fill-rule="evenodd" clip-rule="evenodd"></path>
		<path d="M15 15V15C15 13.8954 14.1046 13 13 13L11 13C9.89543 13 9 13.8954 9 15V15" fill-rule="evenodd" clip-rule="evenodd"></path>
		<circle cx="12" cy="9" r="2" fill-rule="evenodd" clip-rule="evenodd"></circle>
	</svg>
);
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: testimonialIcon,

	/**
	 * @see ./save.js
	 */
	save,
} );

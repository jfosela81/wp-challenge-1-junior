/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, TextControl, ToggleControl } from '@wordpress/components';


import metadata from './block.json';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const { testimonialQuotes, authorName, jobTitle } = attributes;

	console.log(attributes);
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', metadata.textdomain ) }>
					<TextareaControl 
						label={ __( 'Testimonial Quotes', metadata.textdomain ) }
						value={ testimonialQuotes || '' }
						onChange={ (value) => {
							setAttributes( { testimonialQuotes: value } )
						}}
						>
					</TextareaControl>
					<TextControl
						label={ __( 'Author name', metadata.textdomain ) }
						value={ authorName || '' }
						onChange={ (value) => {
							setAttributes( { authorName: value } )
						}}
						>
					</TextControl>
					<TextControl
						label={ __( 'Job title', metadata.textdomain ) }
						value={ jobTitle || '' }
						onChange={ (value) => {
							setAttributes( { jobTitle: value } )
						}}
						>
					</TextControl>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<blockquote>
					{
						<RichText
							value={ testimonialQuotes }
							onChange={(value) =>
								setAttributes( { testimonialQuotes: value } )
							}
							>

						</RichText>
					}
				</blockquote>
				<p>{ authorName }</p>
				<small>{ jobTitle }</small>
			</div>
		</>
	);
}

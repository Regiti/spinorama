// Types
import type { ResponsiveStyleValue } from '@mui/system'
import type { Theme } from '@mui/material'

export type LayoutPositions = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'inherit'
export type GenerateLayoutPositionsProps = { propValue: LayoutPositions }

export type GenerateLayoutProps = {
	/**
	 * The theme object that provides the access to the theme styles, palette, typography, etc
	 */
	theme: Theme

	/**
	 * Defines the positioning of the button component
	 * @default undefined
	 */
	layout?: ResponsiveStyleValue<LayoutPositions> | undefined
}

'use client'

import * as React from 'react'
import { Grid, IconButton } from '@mui/material'
import { CircleOutlined as CircleOutlinedIcon } from '@mui/icons-material'

// Types
import type { SpinoramaThumbnailProps } from './index.types'

const SpinoramaThumbnail: React.FC<SpinoramaThumbnailProps> = (props: SpinoramaThumbnailProps) => {
	// Props
	const { thumbnailsref, className } = props

	return (
		<Grid item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-thumbnail${className ? ` ${className}` : ''}`}>
			<IconButton
				ref={ref => thumbnailsref?.current.push(ref)}
				size="small"
				color="primary"
				sx={{
					opacity: 0.8,
					color: 'primary.main',
					'.selected &.MuiButtonBase-root': {
						opacity: 1,
						color: 'primary.dark'
					}
				}}
			>
				<CircleOutlinedIcon />
			</IconButton>
		</Grid>
	)
}

export default SpinoramaThumbnail
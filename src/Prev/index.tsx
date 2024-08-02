'use client'

import React, { forwardRef } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { ForwardedRef } from 'react'
import type { SpinoramaPrevProps } from './index.types'

const SpinoramaPrev = forwardRef((props: SpinoramaPrevProps, ref: ForwardedRef<SpinoramaPrevProps>) => {
	// Props
	const { buttonref, className } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-prev${className ? ` ${className}` : ''}`}>
			<IconButton ref={buttonref} color="primary" sx={{ color: 'primary.dark' }}>
				{theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
			</IconButton>
		</Grid>
	)
})

export default SpinoramaPrev

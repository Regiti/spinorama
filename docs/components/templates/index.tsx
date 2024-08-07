'use client'

import dynamic from 'next/dynamic'

// Types
import type { IndexProps } from '@/types/components/templates'

// MDX
const IndexEn = dynamic(() => import('@/md/en/index.mdx'))
const IndexFa = dynamic(() => import('@/md/fa/index.mdx'))

const IndexTemplate = (props: IndexProps) => {
	// Props
	const { lng } = props

	if (lng === 'fa') return <IndexFa />
	else return <IndexEn />
}

export default IndexTemplate

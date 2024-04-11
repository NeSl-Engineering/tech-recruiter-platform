import { PERSONAL_AREA_NAME, SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: `Главная ${PERSONAL_AREA_NAME}`
}

const TrainingPlanPage = () => {
	return (
		<div>TrainingPlanPage</div>
	)
}

export default TrainingPlanPage
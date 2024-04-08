import PersonalAreaLayout from '@/components/personal-area-layout/PersonalAreaLayout'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
	return <PersonalAreaLayout>{children}</PersonalAreaLayout>
}

export default layout

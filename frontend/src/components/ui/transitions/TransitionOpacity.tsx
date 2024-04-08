'use client'

import { motion } from 'framer-motion'

export default function TransitionOpacity({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.5 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}

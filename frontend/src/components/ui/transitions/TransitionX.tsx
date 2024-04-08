'use client'

import { motion } from 'framer-motion'

export default function TransitionX({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<motion.div
			initial={{ x: -10, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.3 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}

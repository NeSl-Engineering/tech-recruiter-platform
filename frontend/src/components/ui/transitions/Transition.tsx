'use client'

import { motion } from 'framer-motion'

export default function Transition({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<motion.div
			initial={{ y: 25, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 1.4 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}

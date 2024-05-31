export interface ButtonProps {
	children: React.ReactNode
	cyanButton?: Boolean
	whiteButton?: Boolean
	blueTransparent?: Boolean
	whiteTransparent?: Boolean
	notActive?: Boolean
	deleteButton?: Boolean
	widthFull?: Boolean
	disabled?: boolean | undefined
	disabledTransparent?: boolean | undefined
	className?: string
	radius?: string
	py?: string
	onClick?: (e: any) => void
}

export interface ButtonProps {
	children: React.ReactNode
	cyanButton?: Boolean
	whiteButton?: Boolean
	blueTransparent?: Boolean
	whiteTransparent?: Boolean
	notActive?: Boolean
	deleteButton?: Boolean
	widthFull?: Boolean
	className?: string
	onClick?: (e: any) => void
}

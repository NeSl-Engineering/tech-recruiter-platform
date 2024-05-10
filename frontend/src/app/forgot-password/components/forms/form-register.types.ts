export interface IFormRegister {
	itemProp?: any
	itemPropFunc: (e: string) => void
	onSubmit?: () => void
	pushNextIndex: () => void
}

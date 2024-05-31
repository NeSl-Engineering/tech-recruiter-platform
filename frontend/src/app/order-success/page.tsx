import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import OrderSuccess from './OrderSuccess'

export const metadata: Metadata = {
	title: `Оплата ${SITE_NAME}`
}

const OrderSuccessPage = () => {
	return <OrderSuccess />
}

export default OrderSuccessPage

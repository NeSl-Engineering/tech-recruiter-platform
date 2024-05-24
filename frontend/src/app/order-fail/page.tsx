import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import OrderFail from './OrderFail'

export const metadata: Metadata = {
	title: `Оплата ${SITE_NAME}`
}

const OrderFailPage = () => {
	return <OrderFail />
}

export default OrderFailPage

import { MAIN_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		link: MAIN_PAGES.AGENCY,
		name: 'Кадровое агентство'
	},
	{
		link: MAIN_PAGES.PROMOTION,
		name: 'Карьерное продвижение'
	},
	{
		link: MAIN_PAGES.COURSES,
		name: 'Курсы'
	},
	{
		link: MAIN_PAGES.MASTER_CLASSES,
		name: 'Мастер классы'
	},
	{
		link: MAIN_PAGES.BLOG,
		name: 'Блог'
	},
	{
		link: MAIN_PAGES.CONTACTS,
		name: 'Контакты'
	}
]

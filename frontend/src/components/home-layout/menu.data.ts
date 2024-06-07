import { MAIN_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		link: '/#corporative',
		name: 'Кадровое агентство'
	},
	{
		link: '/#map-courses',
		name: 'Карьерное продвижение'
	},
	{
		link: '/#choose-courses',
		name: 'Курсы'
	},
	{
		link: '/#master-class',
		name: 'Мастер классы'
	},
	{
		link: MAIN_PAGES.BLOG,
		name: 'Блог'
	},
	{
		link: '/#contacts',
		name: 'Контакты'
	}
]

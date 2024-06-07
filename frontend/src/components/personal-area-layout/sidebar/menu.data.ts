import { LK_PAGES } from '@/config/lk-pages-url.config'
import { IMenuItemLK } from './menu.interface'

export const MENU_LK: IMenuItemLK[] = [
	{
		icon: 'home',
		link: LK_PAGES.HOME,
		name: 'Главная страница',
		arrow: false
	},
	{
		icon: 'plan',
		link: LK_PAGES.HOME,
		name: 'План обучения',
		arrow: false
	},
	// {
	// 	icon: 'blog',
	// 	link: LK_PAGES.USEFUL,
	// 	name: 'Полезный блог',
	// 	arrow: true
	// },
	{
		icon: 'courses',
		link: LK_PAGES.ALL_COURSES,
		name: 'Все курсы',
		arrow: true
	},
	{
		icon: 'progress',
		link: LK_PAGES.PROGRESS,
		name: 'Прогресс',
		arrow: false
	}
	// {
	// 	icon: 'answer',
	// 	link: LK_PAGES.ANSWERS,
	// 	name: 'Мои ответы',
	// 	arrow: false
	// },
	// {
	// 	icon: 'answer',
	// 	link: LK_PAGES.PROBLEMS,
	// 	name: 'Сообщить о проблеме',
	// 	arrow: false
	// }
]

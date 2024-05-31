'use client'
import { Button } from '@/components/ui/buttons/Button'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import { LK_PAGES } from '@/config/lk-pages-url.config'
import { ICourse } from '@/types/types'
import { useRouter } from 'next/navigation'
import styles from './ProgressBlock.module.scss'

const ProgressBlock = ({ data }: { data?: ICourse }) => {
	const router = useRouter()
	return (
		<div className={styles.ProgressBlock}>
			<h1 className={styles.title}>{data?.title}</h1>
			<ProgressBar />
			<div className={styles.buttons}>
				<Button
					blueTransparent
					onClick={() => router.push(`${LK_PAGES.PLAN}/${data?.id}`)}
				>
					Открыть демо-главу
				</Button>
				<Button>Купить полный доступ</Button>
			</div>
		</div>
	)
}

export default ProgressBlock

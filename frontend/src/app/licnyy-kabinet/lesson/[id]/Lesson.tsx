'use client'

import { Button } from '@/components/ui/buttons/Button'
import { lessonTestService } from '@/services/lesson-tests.service'
import { ILessonTestMutate } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useLessonTests } from '../hooks/useLessonTest'
import styles from './Lesson.module.scss'

const Lesson = ({ params }: { params: { id: string } }) => {
	const { data, isLoading } = useLessonTests(params.id)
	const [selected, setSelected] = useState<number>(0)
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		setValue,
		formState: { errors }
	} = useForm<ILessonTestMutate>({
		mode: 'onChange'
	})

	const dataSend = [{}]
	const router = useRouter()

	const handleClickTest = (test: number, question: number, option: any) => {
		const products = dataSend?.map((item: any) => ({
			question: question,
			test: test,
			option: option
		}))
		setSelected(option.toString())
		setValue('test', test)
		setValue('answers', products)
	}

	const handleUnSelectTest = (
		test: number,
		question: number,
		option: number
	) => {}

	const { mutate } = useMutation({
		mutationKey: ['lesson-test-mutate'],
		mutationFn: (data: ILessonTestMutate) =>
			lessonTestService.postLessonTest(data),

		onSuccess() {
			toast.success('Успешно отправлено!')
			reset()
		}
	})

	const onSubmit: SubmitHandler<ILessonTestMutate> = data => {
		mutate(data)
		setTimeout(() => {
			router.back()
		}, 1000)
	}

	return (
		<div className={styles.Lesson}>
			<Toaster position='top-right' />
			<h2 className={styles.title}>Урок 1</h2>
			{data?.map(item => (
				<>
					{item?.questions?.map(question => (
						<div key={question.id} className={styles.block}>
							<h3 className={styles.blockTitle}>
								{question.lesson_test} {question.content}
							</h3>
							<div className={styles.options}>
								{question.options.map(option => (
									<div
										key={option.id}
										className={styles.option}
										onClick={() =>
											handleClickTest(item.id, question.id, option.id)
										}
									>
										<h2 className={styles.name}>{option.content}</h2>
										<div
											className={`${styles.emptyCircle} ${
												option.id === Number(selected) ? styles.selected : ''
											}`}
										>
											<div className={styles.selectedCircleBg}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</>
			))}
			<div className={styles.buttonWrapper}>
				<Button onClick={handleSubmit(onSubmit)}>Отправить</Button>
			</div>
		</div>
	)
}

export default Lesson

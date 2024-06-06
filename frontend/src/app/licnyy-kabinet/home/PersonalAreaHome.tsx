'use client'

import { axiosWithAuth } from '@/api/interceptors'
import ProgressBlock from '@/components/personal-area/progress-block/ProgressBlock'
import { IOrder } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styles from './PersonalAreaHome.module.scss'
import { useCourses } from './hooks/useCourses'
import { useCoursesDemo } from './hooks/useCoursesDemo'

const PersonalAreaHome = () => {
	const { data, isLoading } = useCourses()
	const { dataDemo, isLoadingDemo } = useCoursesDemo()
	const { handleSubmit, reset, setValue, register, getValues } =
		useForm<IOrder>({
			mode: 'onSubmit'
		})


	const postOrder = async (data: IOrder): Promise<IOrder> => {
		try {
			const response = await axiosWithAuth.post(`/orders/`, data)
			console.log(response)
			return response.data
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				const { status, data } = error.response
				if (status === 401) {
					toast.error(data.detail, { duration: 5000 })
				} else if (data?.non_field_errors[0]) {
					toast.error(data?.non_field_errors[0], {
						duration: 5000
					})
				} else {
					console.log('Error response:', status, data)
				}
			} else {
				console.error('An unexpected error occurred:', error)
			}
			throw error
		}
	}

	const { mutate: mutateOrder, isPending } = useMutation({
		mutationKey: ['order'],
		mutationFn: (data: IOrder) => postOrder(data),
		onSuccess() {
			toast.success('Hаправляем на страницу оплаты!')
		}
	})

	const onSubmit: SubmitHandler<IOrder> = data => {
		setTimeout(() => {
			mutateOrder(data)
		}, 1000)
	}

	const handleClickOrder = (id?: number) => {
		setValue('course', id)
		handleSubmit(onSubmit)()
	}

	return (
		<div className={styles.PersonalArea}>
			<Toaster position='top-right' />
			{data?.length ? (
				<div className={styles.ourCourses}>
					<h1 className={styles.title}>Мои курсы</h1>
					<div className={styles.row}>
						<>
							{data?.map(item => (
								<ProgressBlock key={item.id} data={item} />
							))}
						</>
					</div>
				</div>
			) : null}
			<div className={styles.demoAccess}>
				<h1 className={styles.title}>Демо доступы</h1>
				<div className={styles.row}>
					<>
						{dataDemo?.map(item => (
							<ProgressBlock
								key={item.id}
								data={item}
								orderClick={() => handleClickOrder(item?.id)}
							/>
						))}
					</>
				</div>
			</div>
			<div className={styles.haveQuestion}>
				<div className={styles.content}>
					<h1 className={styles.titleContent}>
						Остались вопросы? <br /> Напишите в наш чат телеграмм.
					</h1>
					<div className={styles.buttonWrapper}>
						<a href='https://t.me/tech_recruiter'>Написать в телеграм</a>
					</div>
				</div>
				<div className={styles.qrCode}>
					<Image src='/qr-code.svg' alt='qrCode' fill />
				</div>
			</div>
		</div>
	)
}

export default PersonalAreaHome

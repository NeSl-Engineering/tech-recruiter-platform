'use client'

import { axiosWithAuth } from '@/api/interceptors'
import { Button } from '@/components/ui/buttons/Button'
import Transition from '@/components/ui/transitions/Transition'
import { ICourse, IOrder } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styles from './MapCourses.module.scss'

const MapCourses = ({ data }: { data?: ICourse[] }) => {
	const router = useRouter()
	const { handleSubmit, reset, setValue, register, getValues } =
		useForm<IOrder>({
			mode: 'onSubmit'
		})

	const [paymentUrl, setPaymentUrl] = useState<string>('')

	const postOrder = async (data: IOrder): Promise<IOrder> => {
		try {
			const response = await axiosWithAuth.post(`/orders/`, data)
			console.log(response)
			setPaymentUrl(response.data.payment_url)
			return response.data
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				const { status, data } = error.response

				if (status === 401) {
					toast.error(
						'Для выполнении этой действии пожалуйста авторизуйтесь!',
						{ duration: 50000 }
					)
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

	useEffect(() => {
		router.push(paymentUrl)
	}, [paymentUrl])

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
		<>
			<Toaster position='top-right' />
			<div className={styles.MapCourses}>
				<Transition>
					<div className='__container'>
						<h1>
							Карта курсов в академии которая помогает достигать успеха 🧑🏼‍💼{' '}
						</h1>
					</div>
					<div className={styles.rowWrapper}>
						<div className={styles.row}>
							{data?.map((item, index) => (
								<div key={index} className={styles.item}>
									<h4 className={styles.step}>Шаг 0{index + 1}</h4>
									<h2 className={styles.title}>{item.title}</h2>
									<div className={styles.footer}>
										<p className={styles.availability}>
											Старт {item.start_time}
										</p>
										<div className={styles.buttons}>
											<Button
												widthFull
												onClick={() => handleClickOrder(item.id)}
											>
												Записаться
											</Button>
											<Button
												widthFull
												blueTransparent
												onClick={() => router.push('/licnyy-kabinet/home')}
											>
												Демо доступ
											</Button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</Transition>
			</div>
		</>
	)
}

export default MapCourses

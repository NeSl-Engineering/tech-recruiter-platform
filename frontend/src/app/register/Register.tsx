'use client'
import LogRegLayout from '@/components/logreg-layout/LogRegLayout'
import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './Register.module.scss'

import FirstFormRegister from './forms/FirstFormRegister'
import FourthFormRegister from './forms/FourthFormRegister'
import SecondFormRegister from './forms/SecondFormRegister'
import SuccessFormRegister from './forms/SuccessRegister'
import ThirdFormRegister from './forms/ThirdFormRegister'
import { INDICATORS } from './register.data'

const Register = () => {
	const [isActive, setIsActive] = useState('1')

	const router = useRouter()

	return (
		<LogRegLayout text='Зарегистрируйте аккаунт в нашей платформы и становитесь лучше с каждым днем!'>
			<div className={styles.indicators}>
				{INDICATORS.map((indicator, index: any) => (
					<div
						key={index}
						className={`${styles.indicator} ${
							isActive
								? isActive === indicator.index
									? styles.active
									: isActive === '2'
									? styles.firstCompleted
									: isActive === '3'
									? styles.secondCompleted
									: isActive === '4'
									? styles.thirdCompleted
									: styles.red
								: ''
						}`}
					>
						{indicator.index}
					</div>
				))}
			</div>
			<div className={stylesLayout.box}>
				{isActive === '1' ? (
					<FirstFormRegister pushNextIndex={() => setIsActive('2')} />
				) : isActive === '2' ? (
					<SecondFormRegister pushNextIndex={() => setIsActive('3')} />
				) : isActive === '3' ? (
					<ThirdFormRegister pushNextIndex={() => setIsActive('4')} />
				) : isActive === '4' ? (
					<FourthFormRegister pushNextIndex={() => setIsActive('5')} />
				) : (
					<SuccessFormRegister
						pushNextIndex={() => router.push('/licnyy-kabinet')}
					/>
				)}
			</div>
		</LogRegLayout>
	)
}

export default Register

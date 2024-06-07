'use client'

import { Button } from '@/components/ui/buttons/Button'
import IconUI from '@/components/ui/icon/Icon'
import { LK_PAGES } from '@/config/lk-pages-url.config'
import { useDropdown } from '@/hooks/useDropdown'
import { useOutside } from '@/hooks/useOutside'
import { removeFromStorage } from '@/services/auth-token.service'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import SearchedData from './components/SearchedData/SearchedData'
import styles from './HeaderPersonalArea.module.scss'
import { useProfile } from './hooks/useProfile'
import { useSearch } from './hooks/useSearch'
const HeaderPersonalArea = () => {
	const router = useRouter()
	const [query, setQuery] = useState<string>('')
	const [isSearchDropdown, setIsSearchDropdown] = useState(false)

	const {
		showDropdown,
		closeDropdown,
		openDropdown,
		dropdownMenuRef,
		dropdownBodyRef
	} = useDropdown()

	const logout = () => {
		removeFromStorage()
		router.push('/login')
	}

	const { isShow, setIsShow, ref } = useOutside(false)
	const { data, isLoading } = useProfile()
	const { dataSearch, isLoadingSearch, refetch } = useSearch(query)

	const handleKeyUp = (e: any) => {
		setIsSearchDropdown(true)
		setIsShow(true)
		if (e.target.value === '') {
			setIsSearchDropdown(false)
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	return (
		<header className={styles.header}>
			<div className={styles.searchWrapper} ref={ref}>
				<div className={styles.searchItem}>
					<input
						placeholder='Найти курс'
						value={query}
						onChange={handleInputChange}
						onKeyUp={(e: any) => {
							handleKeyUp(e)
						}}
					/>
					<div className={styles.searchButton}>
						<Button cyanButton>Найти</Button>
					</div>
				</div>
				{isSearchDropdown && isShow && (
					<SearchedData
						data={dataSearch}
						isLoading={isLoadingSearch}
						close={() => setIsSearchDropdown(false)}
					/>
				)}
			</div>
			<div className={styles.profile}>
				<div className={styles.img}>
					{data?.profile_photo !== null ? (
						<Image src='/profile.svg' alt='profile' fill />
					) : (
						<h2>
							{data?.first_name?.charAt(0)}

							{data?.last_name?.charAt(0)}
						</h2>
					)}
				</div>
				<div className={styles.content}>
					<h1>
						{data?.first_name} {data?.last_name}
					</h1>
					<span>Онлайн</span>
				</div>
				<div className={styles.icons}>
					<div className={styles.icon}>
						<IconUI icon='notification' />
					</div>
					<div ref={dropdownBodyRef} className={styles.dropdownWrapper}>
						<div className={styles.icon}>
							<IconUI
								icon='threeDots'
								onClick={showDropdown ? closeDropdown : openDropdown}
							/>
						</div>
						{showDropdown && (
							<div ref={dropdownMenuRef} className={styles.dropdown}>
								<ul className={styles.list}>
									<Link href={LK_PAGES.PROFILE} className={styles.item}>
										<h2 className={styles.title}>Мой профиль</h2>
										<div className={styles.navigation}>
											<IconUI icon='arrowRight' />
										</div>
									</Link>
									<button onClick={logout} className={styles.item}>
										<h2 className={styles.title}>Выйти</h2>
										<div className={styles.navigation}>
											<IconUI icon='arrowRight' />
										</div>
									</button>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderPersonalArea

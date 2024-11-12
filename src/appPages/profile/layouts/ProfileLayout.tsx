'use client'
import { menu_items } from '@/shared/const/menu-items'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileSidebar from './components/profile_sidebar/ProfileSidebar'
import styles from './ProfielLayout.module.scss'

const ProfileLayout: React.FC<IChildren> = ({ children }) => {
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])
	const pathname = usePathname()
	const activeMenuItem = menu_items.find(item => item.href === pathname)
	const items = [
		{ label: 'Главная', href: '/' },
		{ label: 'Профиль', href: '/profile/personal' },
		{ label: String(activeMenuItem?.title.ru), href: '#this' }
	]
	return (
		<div className={styles.profile_layout}>
			<Breadcrumbs items={items} />
			<div className={`${styles['container']} container`}>
				{state && state?.isLoading ? (
					<span>Загрузка...</span>
				) : !state.data ? (
					<></>
				) : (
					<>
						<ProfileSidebar user={state.data} />
						{children}
					</>
				)}
			</div>
		</div>
	)
}

export default ProfileLayout
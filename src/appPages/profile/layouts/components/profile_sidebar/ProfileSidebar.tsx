import { menu_items } from '@/shared/const/menu-items'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './ProfileSidebar.module.scss'
import LogOutButton from './ui/LogOutButton'

type TProps = {
	user: null | UserTypes.User
}

const ProfileSidebar: React.FC<TProps> = ({ user }) => {
	const pathname = usePathname()
	return (
		<aside className={styles.aside}>
			<figure className={styles.profile_pic}>
				{user?.profile_pic ? (
					<>
						{/* @ts-ignore */}
						<img
							src={user?.profile_pic}
							alt={`${user?.fullname} | Profile Picture`}
						/>
					</>
				) : (
					<div className={styles.profile_placeholder}>
						{/* @ts-ignore */}
						<img src='/images/profile_pic_placeholder.svg' alt='Profile picture placeholder' />
					
					</div>
				)}
				<button>Добавить фото</button>
			</figure>
			<ul className={styles.menu_items}>
				{menu_items.map((item, index) => {
					const isActive = pathname == item.href
					return (
						<li key={`${item.href}-${index}`} className={styles.menu_item}>
							<Link
								className={clsx(isActive && styles['active'])}
								href={item.href}
							>
								<span>
									{item.icon}
									{}
								</span>
								<span>{item.title.ru}</span>
							</Link>
						</li>
					)
				})}
				<li className={clsx(styles.menu_item)}>
					<LogOutButton />
				</li>
			</ul>
		</aside>
	)
}

export default ProfileSidebar

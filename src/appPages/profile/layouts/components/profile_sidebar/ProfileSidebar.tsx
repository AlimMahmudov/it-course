import { menu_items } from '@/shared/const/menu-items'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import styles from './ProfileSidebar.module.scss'
import LogOutButton from './ui/LogOutButton'
import { useToggle } from 'usehooks-ts'
import UpdateProfilePic from '@/shared/components/update_profile_pic/UpdateProfilePic'
import { profile_picture } from '@/shared/config/api'

type TProps = {
	user: null | UserTypes.User
}

const ProfileSidebar: React.FC<TProps> = ({ user }) => {
	const [open, toggleOpen] = useToggle(false)
	const pathname = usePathname()
	const findMenuItem = useMemo(
		() => menu_items.find(menuItem => menuItem.href == pathname),
		[pathname, open]
	)
	return (
		<aside className={styles.aside}>
			<button
				className={clsx(styles.toggleOpen, open && styles.active)}
				onClick={toggleOpen}
			>
				<span>{findMenuItem?.icon}</span>
				<span>{findMenuItem?.title.ru}</span>
				<span className={styles.icon}>
					<svg
						width='23'
						height='14'
						viewBox='0 0 23 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 1L10.625 12L21.625 1'
							stroke='black'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
					</svg>
				</span>
			</button>
			<div className={clsx(styles.block, open && styles.active)}>
				<figure className={styles.profile_pic}>
					{user?.profile_pic ? (
						<>
							{/* @ts-ignore */}
							<img
								src={
									user?.profile_pic.includes('http')
										? user.profile_pic
										: profile_picture(user.profile_pic)
								}
								alt={`${user?.fullname} | Profile Picture`}
							/>
						</>
					) : (
						<div className={styles.profile_placeholder}>
							{/* @ts-ignore */}
							<img
								src='/images/profile_pic_placeholder.svg'
								alt='Profile picture placeholder'
							/>
						</div>
					)}
					<UpdateProfilePic />
				</figure>
				<ul className={styles.menu_items}>
					{menu_items.map((item, index) => {
						const isActive = pathname == item.href
						return (
							<li
								onClick={toggleOpen}
								key={`${item.href}-${index}`}
								className={styles.menu_item}
							>
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
			</div>
		</aside>
	)
}

export default ProfileSidebar

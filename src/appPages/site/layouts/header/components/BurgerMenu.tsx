'use client'
import { FC, useRef } from 'react'
import { useLanguageStore } from '@/shared/stores/Language'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import scss from './BurgerMenu.module.scss'
import clsx from 'clsx'
import { useOnClickOutside } from 'usehooks-ts'

interface LinksType {
	name: string
	link: string
}

interface BurgerMenuProps {
	links: LinksType[]
	isOpen: boolean
	onClose(): void
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen, onClose }) => {
	const { translate } = useLanguageStore()

	const router = useRouter()
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])
	const ref = useRef<HTMLDivElement>(null)
	useOnClickOutside(ref, onClose)
	return (
		<div
			className={
				isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
			}
			ref={ref}
		>
			<div className={scss.content}>
				<div className={scss.nav}>
					<ul>
						{links.map((item, index) => (
							<a key={index}>
								<Link onClick={onClose} href={item.link} key={index}>
									{item.name}
								</Link>
							</a>
						))}
					</ul>
					<div className={clsx(scss.buttons, !state?.data && scss.no_auth)}>
						{!state?.data ? (
							<>
								<button
									onClick={() => {
										router.push('/auth/signin')
										onClose()
									}}
									className={scss.btn}
								>
									{translate('Кирүү', 'Войти')}
								</button>
								<button
									className={scss.subscribe}
									onClick={() => {
										router.push('/subscription')
										onClose()
									}}
								>
									{translate('Катталуу', 'Подписаться')}
								</button>
							</>
						) : (
							<>
								<button
									className={scss.profile}
									onClick={() => {
										router.push('/profile/personal')
										onClose()
									}}
								>
									Профиль
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu

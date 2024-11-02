'use client'
import logo from '@/shared/assets/logo.svg'
import { useLanguageStore } from '@/shared/stores/Language'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import scss from './Header.module.scss'

const Header = () => {
	const router = useRouter()
	const { translate } = useLanguageStore()

	return (
		<header id={scss.Header}>
			<div className='container'>
				<div className={scss.header}>
					<div className={scss.teg}>
						<Image onClick={() => router.push('/')} src={logo} alt='Logo' />
						<Link href='/school'>{translate('Мектеп жөнүндө', 'О школе')}</Link>
						<Link href='/our_courses'>{translate('Биздин курстар', 'Наши курсы')}</Link>
						<Link href='/us'>{translate('Биз жөнүндө', 'О нас')}</Link>
					</div>
					<div className={scss.header_button}>
						<button
							onClick={() => router.push('/auth/signin')}
							className={scss.btn}
						>
							{translate('Кирүү', 'Войти')}
						</button>
						<button>{translate('Катталуу', 'Подписаться')}</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

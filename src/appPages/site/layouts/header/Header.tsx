'use client'
import logo from '@/shared/assets/logo.svg'
import { useLanguageStore } from '@/shared/stores/Language'
import Image from 'next/image'
import scss from './Header.module.scss'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
const Header = () => {
	const { translate } = useLanguageStore()
	const router = useRouter()
	return (
		<header id={scss.Header} data-header='true'>
			<div className='container'>
				<div className={scss.header}>
					<div className={scss.teg}>
						<Link href='/' data-home>
							<Image src={logo} alt='Logo' />
						</Link>
						<Link href='/school'>{translate('Мектеп жөнүндө', 'О школе')}</Link>
						<Link href='/our_courses'>
							{translate('Биздин курстар', 'Наши курсы')}
						</Link>
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

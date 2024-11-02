'use client'
import php4 from '@/shared/assets/box.svg'
import php5 from '@/shared/assets/box2.svg'
import php2 from '@/shared/assets/cpp.svg'
import css from '@/shared/assets/css.svg'
import php from '@/shared/assets/php.svg'
import css2 from '@/shared/assets/play.svg'
import php3 from '@/shared/assets/search.svg'
import css3 from '@/shared/assets/seting.svg'
import man from '@/shared/assets/web_development_banner_1-removebg-preview.png'
import { useLanguageStore } from '@/shared/stores/Language'
import Image from 'next/image'
import scss from './School.module.scss'

const School = () => {
	const { translate } = useLanguageStore()

	return (
		<div id={scss.School}>
			<div className='container'>
				<div className={scss.school}>
					<div className={scss.school_text}>
						<h1>{translate('Биздин мектеп тууралуу:', 'О нашей школе:')}</h1>
						<p>
							{translate(
								'Биздин платформа — бул IT тармагына кирип, көбүрөөк акча тапкысы келгендер үчүн интенсивдүү окуу программасы.',
								'Наша платформа — это интенсивная программа обучения для тех, кто хочет освоить востребованную профессию, войти в IT и зарабатывать больше.'
							)}
						</p>

						<h1>{translate('Биздин миссиябыз:', 'Наша миссия:')}</h1>
						<p>
							{translate(
								'Заманбап технологияларга кызыгууну калыптандыруу жана окуучуларга келечектеги кесипти тандоого жардам берүү.',
								'Сформировать интерес к современным технологиям и помочь школьнику определиться с выбором будущей специальности.'
							)}
						</p>
					</div>
					<div className={scss.school_img}>
						<div className={scss.box}>
							<Image className={scss.php1} src={php} alt='PHP Icon' />
							<Image className={scss.php2} src={php2} alt='C++ Icon' />
							<Image className={scss.php3} src={php3} alt='Search Icon' />
							<Image className={scss.php4} src={php4} alt='Box Icon' />
							<Image className={scss.php5} src={php5} alt='Box Icon 2' />
						</div>
						<div className={scss.block}>
							<Image className={scss.nam} src={man} alt='Man with laptop' />
							<div className={scss.box2}>
								<Image className={scss.css1} src={css} alt='CSS Icon' />
								<Image className={scss.css2} src={css2} alt='Play Icon' />
								<Image className={scss.css3} src={css3} alt='Settings Icon' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default School

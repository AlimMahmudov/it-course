'use client'
import { useLanguageStore } from '@/shared/stores/Language'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'
import scss from './Courses.module.scss'

const Courses = () => {
	const { translate } = useLanguageStore()

	return (
		<div id={scss.Courses}>
			<div className='container'>
				<div className={scss.courses}>
					<div className={scss.courses_text}>
						<h1>{translate('Курстар', 'Курсы')}</h1>
					</div>
					<div className={scss.courses_block}>
						<div className={scss.courses_box}>
							<h1>
								{translate('Frontend-разработчик', 'Frontend-разработчик')}
							</h1>
							<p>
								{translate(
									'Веб-сайттарды түзүү боюнча чебер. Алардын кооз, интерактивдүү жана көп функционалдуу болушун камсыз кыла алат. Бул кесип фриланс кылууну жана жаңы долбоорлорду дайыма иштеп чыгууну каалагандар үчүн абдан ылайыктуу.',
									'Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты'
								)}
							</p>
							<Link href=''>
								{translate('Көбүрөөк маалымат', 'Подробнее')}{' '}
								<FaLongArrowAltRight />
							</Link>
						</div>

						<div className={scss.courses_box}>
							<h1>
								{translate('Frontend-разработчик', 'Frontend-разработчик')}
							</h1>
							<p>
								{translate(
									'Веб-сайттарды түзүү боюнча чебер. Алардын кооз, интерактивдүү жана көп функционалдуу болушун камсыз кыла алат. Бул кесип фриланс кылууну жана жаңы долбоорлорду дайыма иштеп чыгууну каалагандар үчүн абдан ылайыктуу.',
									'Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты'
								)}
							</p>
							<Link href=''>
								{translate('Көбүрөөк маалымат', 'Подробнее')}{' '}
								<FaLongArrowAltRight />
							</Link>
						</div>

						<div className={scss.courses_box}>
							<h1>
								{translate('Frontend-разработчик', 'Frontend-разработчик')}
							</h1>
							<p>
								{translate(
									'Веб-сайттарды түзүү боюнча чебер. Алардын кооз, интерактивдүү жана көп функционалдуу болушун камсыз кыла алат. Бул кесип фриланс кылууну жана жаңы долбоорлорду дайыма иштеп чыгууну каалагандар үчүн абдан ылайыктуу.',
									'Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты'
								)}
							</p>
							<Link href=''>
								{translate('Көбүрөөк маалымат', 'Подробнее')}{' '}
								<FaLongArrowAltRight />
							</Link>
						</div>
					</div>
					<div className={scss.courses_button}>
						<button>{translate('Бардык курстар', 'Все курсы')}</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Courses

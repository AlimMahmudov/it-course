import React, { memo } from 'react'
import cardman from '@/shared/assets/cardman.svg'
import styles from './CourseReviews.module.scss'
import Image from 'next/image'
const CourseReviews: React.FC<{ course: ICourse }> = memo(({}) => {
	return (
		<div id={styles.Review}>
			<div className='container'>
				<div className={styles.review}>
					<div className={styles.review_text}>
						<h1>Отзывы наших студентов</h1>
					</div>
					<div className={styles.review_block}>
						{Array.from({ length: 7 }).map((review, index) => (
							<div key={index} className={styles.review_box}>
								<Image src={cardman} alt='' />
								<div className={styles.review_boxt_text}>
									<h1>Виктор Александарович</h1>
									<p>
										С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
										Designer с нуля" я с остался полностью доволен, что мой
										выбор пал именно на данную школу. Если вы выберите данную
										школу - вам обеспечена прокачка в выбранной вами области.
										Всячески рекомендую и благодарю!
									</p>
								</div>
								<div className={styles.review_data}>
									<h2>23.02.2022</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
})

CourseReviews.displayName = 'CourseReviews'
export default CourseReviews

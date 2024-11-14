import Material100 from '@/shared/assets/features/100materials.svg'
import Persent100 from '@/shared/assets/features/100persent.svg'
import AnyTime from '@/shared/assets/features/any_time.svg'
import Animate from '@/shared/ui/animate/Animate'
import Image from 'next/image'
import React, { memo } from 'react'
import styles from './CourseFeatures.module.scss'
import { profile_picture } from '@/shared/config/api'
const CourseFeatures: React.FC<{ course: CoursesTypes.Course }> = memo(
	({ course }) => {
		return (
			<section className={styles.course_features}>
				<Animate className={`${styles['container']} container`}>
					<div className={styles['features']}>
						<div className={styles.block}>
							<figure>
								<Image src={Material100} alt='100 material | icon' />
							</figure>
							<h5>100 материалов</h5>
							<p>
								Только полезная информация, никакой воды. Применяйте эти знания
								первыми!
							</p>
						</div>
						<div className={styles.block}>
							<figure>
								<Image src={Persent100} alt='100 persent | icon' />
							</figure>
							<h5>100% эксклюзив</h5>
							<p>Курс записан эксклюзивно для нашей платформы</p>
						</div>
						<div className={styles.block}>
							<figure>
								<Image src={AnyTime} alt='any time | icon' />
							</figure>
							<h5>В любое время, в любом месте</h5>
							<p>
								Занимайтесь как вам удобно и где угодно, на своем мобильном или
								компьютере
							</p>
						</div>
					</div>

					<div className={styles['master_class_leader']}>
						<figure>
							<Image
								src={profile_picture(String(course.instructor?.profile_pic))}
								width={428}
								height={440}
								alt='master class leader'
							/>
						</figure>
						<span>Мастер класс ведет</span>
						<h4>{course.instructor?.fullname}</h4>
						<span>{course.instructor?.specialization}</span>
					</div>
				</Animate>
			</section>
		)
	}
)

CourseFeatures.displayName = 'CourseFeatures'
export default CourseFeatures

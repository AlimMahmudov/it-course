import Material100 from '@/shared/assets/features/100materials.svg'
import Persent100 from '@/shared/assets/features/100persent.svg'
import AnyTime from '@/shared/assets/features/any_time.svg'
import MasterClassLeader from '@/shared/assets/features/master_class_leader.png'
import Animate from '@/shared/ui/animate/Animate'
import Image from 'next/image'
import React, { memo } from 'react'
import styles from './CourseFeatures.module.scss'
const CourseFeatures: React.FC<{ course: ICourse }> = memo(({ course }) => {
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
						<Image src={MasterClassLeader} alt='master class leader' />
					</figure>
					<span>Мастер класс ведет</span>
					<h4>{course.master_class_leader.name}</h4>
					<span>{course.master_class_leader.title}</span>
				</div>
			</Animate>
		</section>
	)
})

CourseFeatures.displayName = 'CourseFeatures'
export default CourseFeatures

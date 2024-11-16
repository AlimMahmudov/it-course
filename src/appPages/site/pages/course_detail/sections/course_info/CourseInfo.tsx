import Animate from '@/shared/components/animate/Animate'
import React, { memo } from 'react'
import styles from './CourseInfo.module.scss'
interface IBeforePurchaseProps {
	course: CoursesTypes.Course
	isBy?: boolean
	purchased_course?: IPuschasedCourse | undefined
}
const CourseInfo: React.FC<IBeforePurchaseProps> = memo(
	({ course, isBy = false, purchased_course }) => {
		const materialsCompleted =
			purchased_course?.materials.completeds.length || 0
		const materialsAll = course.duration.materials || 1
		const progress = (materialsCompleted / materialsAll) * 100

		return (
			<section className={styles.course_info}>
				<Animate className={`${styles['container']} container`}>
					<div className={styles['left']}>
						<h4>{course.title}</h4>
						<p>{course.description}</p>
						{!isBy && <button>Купить курс за {course.price} $</button>}
					</div>
					{!isBy && (
						<div className={styles['right']}>
							<div className={styles['col']}>
								<label>Доступ: </label>
								<span>{course.access_level}</span>
							</div>
							<div className={styles['col']}>
								<label>В курс входит: </label>
								<span>{course.duration.modules} модулей</span>
								<span>{course.duration.materials} материалов</span>
							</div>
						</div>
					)}
					{isBy && (
						<div className={styles['isBy']}>
							<div className={styles.top}>
								<h6>Прогресс по курсу</h6>
								<div className={styles.range}>
									<div
										style={{ width: `${progress}%` }}
										className={styles.range_b}
									></div>
								</div>
							</div>
							<div className={styles.bottom}>
								<div className={styles.col}>
									<span className={styles.completed}>Пройдено модулей</span>
									<span>
										{purchased_course?.modules.completeds.length}/
										{course.duration.modules}
									</span>
								</div>
								<div className={styles.col}>
									<span className={styles.completed}>Пройдено материалов</span>
									<span>
										{materialsCompleted}/{course.duration.materials}
									</span>
								</div>
							</div>
						</div>
					)}
				</Animate>
			</section>
		)
	}
)
CourseInfo.displayName = 'CourseInfo'

export default CourseInfo

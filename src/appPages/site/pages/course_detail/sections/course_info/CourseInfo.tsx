import React from 'react'
import styles from './CourseInfo.module.scss'
interface IBeforePurchaseProps {
	course: ICourse
}
const CourseInfo: React.FC<IBeforePurchaseProps> = ({ course }) => {
	return (
		<section className={styles.course_info}>
			<div className={`${styles['container']} container`}>
				<div className={styles['left']}>
					<h4>{course.title}</h4>
					<p>{course.description2}</p>
					<button>Купить курс за {course.price} $</button>
				</div>
				<div className={styles['right']}>
					<div className={styles['col']}>
						<label>Доступ: </label>
						<span>{course.access}</span>
					</div>
					<div className={styles['col']}>
						<label>В курс входит: </label>
						<span>{course.duration.modules} модулей</span>
						<span>{course.duration.materials} материалов</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CourseInfo

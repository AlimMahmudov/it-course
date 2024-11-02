import Animate from '@/shared/ui/animate/Animate'
import React from 'react'
import styles from './CourseLP.module.scss'

const stepsname = ['Мастер-класс', 'Своё расписание', 'Сообщество', 'Доступ']
// Course Learning Process
const CourseLP: React.FC<{ course: ICourse }> = ({ course }) => {
	return (
		<section className={styles['course_lp']}>
			<Animate className={`${styles['container']} container`}>
				<h4>Процесс обучения</h4>
				<ul>
					{course.learning_process.steps.map((step, idx) => (
						<li key={idx}>
							<span>{idx + 1}</span>
							<h5>{stepsname[idx]}</h5>
							<p>{step}</p>
						</li>
					))}
				</ul>
			</Animate>
		</section>
	)
}

export default CourseLP

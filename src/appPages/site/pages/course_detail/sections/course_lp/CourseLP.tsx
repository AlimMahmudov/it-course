import Animate from '@/shared/components/animate/Animate'
import React, { memo } from 'react'
import styles from './CourseLP.module.scss'

const learning_process = {
	steps: [
		'Вы получите доступ ко всем урокам мастер-класса и дополнительным материалам.',
		'Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок.',
		'Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях.',
		'Мы предоставляем вам бессрочный доступ к материалам любого оплаченного мастер-класса.'
	]
}

const stepsname = ['Мастер-класс', 'Своё расписание', 'Сообщество', 'Доступ']
// Course Learning Process
const CourseLP: React.FC<{ course: CoursesTypes.Course }> = memo(
	({ course }) => {
		return (
			<section className={styles['course_lp']}>
				<Animate className={`${styles['container']} container`}>
					<h4>Процесс обучения</h4>
					<ul>
						{learning_process.steps.map((step, idx) => (
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
)

CourseLP.displayName = 'CourseLP'
export default CourseLP

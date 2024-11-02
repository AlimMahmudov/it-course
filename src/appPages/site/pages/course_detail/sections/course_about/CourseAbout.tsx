import React from 'react'
import styles from './CourseAbout.module.scss'
interface ICourseAboutProps {
	course: ICourse
}

const CourseAbout: React.FC<ICourseAboutProps> = ({ course }) => {
	return (
		<section className={styles.course_about}>
			<div className={`${styles['container']} container`}>
				<span className={styles.first_span}>Что, как и почему</span>
				<h3>О курсу</h3>
				<div className={`${styles['row']} ${styles.block}`}>
					<div className={styles['left']}>
						{course.course_about.descriptions.map((desc, idx) => (
							<p key={idx}>{desc}</p>
						))}
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
				<div className={styles['block']}>
					<h5>Для кого это</h5>
					<li className={styles.dot}>{course.course_about.this_for}</li>
				</div>
				<div className={styles['block']}>
					<h5>Вы изучите</h5>
					<ul>
						{course.course_about.learning.map(learn => (
							<li key={learn}>{learn}</li>
						))}
					</ul>
				</div>
				<div className={`${styles['block']} ${styles.results}`}>
					<h5>К каким результатам вас может привести этот курс?</h5>
					{course.results.descriptions.map((result, key) => (
						<p key={key}>{result}</p>
					))}
				</div>
				<h4 className={`${styles['outcomes']}`}>
					{course.results.outcomes}
				</h4>
				<div className={`${styles.actions}`}>
					<button className={styles.by}>Купить курс</button>
					<button className={styles.inview}>Смотреть программу</button>
				</div>
			</div>
		</section>
	)
}

export default CourseAbout

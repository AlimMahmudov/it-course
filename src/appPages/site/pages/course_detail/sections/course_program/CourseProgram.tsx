import CourseProgramImage from '@/shared/assets/course_program.png'
import Animate from '@/shared/ui/animate/Animate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './CourseProgram.module.scss'
const CourseProgram: React.FC<{ course: ICourse }> = ({ course }) => {
	return (
		<section className={styles.course_program}>
			<Animate className={`${styles['container']} container`}>
				<div className={styles['left']}>
					<h4>Программа курса</h4>
					<ul>
						{course.program.modules.map((module, idx) => (
							<li key={idx}>
								<span>Модуль {idx + 1}</span>
								<span>{module}</span>
							</li>
						))}
					</ul>
					<button>
						<Link href='/auth/signup'>Зарегистрироваться</Link>
					</button>
				</div>
				<div className={styles['right']}>
					<figure>
						<Image src={CourseProgramImage} alt='' />
					</figure>
				</div>
			</Animate>
		</section>
	)
}

export default CourseProgram

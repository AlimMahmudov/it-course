import CourseProgramImage from '@/shared/assets/course_program.png'
import Animate from '@/shared/ui/animate/Animate'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'
import styles from './CourseProgram.module.scss'
const CourseProgram: React.FC<{ course: ICourse }> = memo(({ course }) => {
	return (
		<section className={styles.course_program}>
			<Animate className={`${styles['container']} container`}>
				<div className={styles['left']}>
					<h4>Программа курса</h4>
					<ul>
						{course.program.modules.map((module, idx) => (
							<li key={idx}>
								<span>Модуль {idx + 1}</span>
								<span>{module.name}</span>
							</li>
						))}
					</ul>
					<button>
						<Link href={`/course_register?course_id=${course.id}`}>
							Зарегистрироваться
						</Link>
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
})

CourseProgram.displayName = 'CourseProgram'
export default CourseProgram

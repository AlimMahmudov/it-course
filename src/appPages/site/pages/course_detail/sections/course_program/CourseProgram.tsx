'use client'
import CourseProgramImage from '@/shared/assets/course_program.png'
import Animate from '@/shared/components/animate/Animate'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'
import styles from './CourseProgram.module.scss'
import { useGetCourseModulesQuery } from '@/shared/redux/api/courses'
const CourseProgram: React.FC<{ course: CoursesTypes.Course }> = memo(
	({ course }) => {
		const { data } = useGetCourseModulesQuery({ course_id: course.id })
		return (
			<section id='programs' className={styles.course_program}>
				<Animate className={`${styles['container']} container`}>
					<div className={styles['left']}>
						<h4>Программа курса</h4>
						<ul>
							{data?.map((module, idx) => (
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
	}
)

CourseProgram.displayName = 'CourseProgram'
export default CourseProgram

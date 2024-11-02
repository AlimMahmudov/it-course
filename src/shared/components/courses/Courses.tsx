'use client'
import React from 'react'
import styles from './Courses.module.scss'
import { courses } from '@/shared/const/courses'
import Link from 'next/link'
import Animate from '@/shared/ui/animate/Animate'
const Courses: React.FC = () => {
	return (
		<div className={styles.courses_list}>
			{courses.map((course, idx) => {
				return (
					<Animate idx={idx} key={course.id} className={styles.course_item}>
						<div>
							<h3>{course.title}</h3>
							<p>{course.description}</p>
						</div>
						<Link href={`/our_courses/${course.id}`}>
							Подробнее
							<span>
								<svg
									width='16'
									height='8'
									viewBox='0 0 16 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M15.367 4.35355C15.5622 4.15829 15.5622 3.84171 15.367 3.64645L12.185 0.464466C11.9897 0.269204 11.6731 0.269204 11.4779 0.464466C11.2826 0.659728 11.2826 0.976311 11.4779 1.17157L14.3063 4L11.4779 6.82843C11.2826 7.02369 11.2826 7.34027 11.4779 7.53553C11.6731 7.7308 11.9897 7.7308 12.185 7.53553L15.367 4.35355ZM0 4.5H15.0134V3.5H0L0 4.5Z'
										fill='black'
									/>
								</svg>
							</span>
						</Link>
					</Animate>
				)
			})}
		</div>
	)
}

export default Courses
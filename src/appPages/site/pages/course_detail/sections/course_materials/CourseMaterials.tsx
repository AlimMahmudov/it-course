'use client'
import Animate from '@/shared/components/animate/Animate'
import { useGetCourseModulesQuery } from '@/shared/redux/api/courses'
import clsx from 'clsx'
import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import styles from './CourseMaterials.module.scss'

interface ICourseMaterialsProps {
	course: CoursesTypes.Course
	purchased_course: UserTypes.UserProgress
	toggleModule: (key: 'material' | 'module', id: string) => void
	active: {
		module: string
		material: string
	}
}
const CourseMaterials: React.FC<ICourseMaterialsProps> = ({
	course,
	purchased_course,
	active,
	toggleModule
}) => {
	const { data, isError,  isLoading } = useGetCourseModulesQuery({
		course_id: course.id,
		materials_returned: true
	})

	return (
		<section className={styles.course_materials}>
			<div className={clsx(styles.container, 'container')}>
				<h3>ПРОГРАММА КУРСА</h3>
				<div className={styles['row']}>
					<div className={styles.left}>
						{active.material && active.module ? (
							<figure>
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/zAPTohhQpg0?si=MjjPNfnL1MnjipoG'
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen
								></iframe>
							</figure>
						) : (
							<div className={styles.no_selected}>No Selected Material</div>
						)}
					</div>
					<div className={styles['modules']}>
						{isLoading ? (
							<span>Загрузка...</span>
						) : isError || !data || data.length === 0 ? (
							<span className={styles.error}>
								Данные отсутствуют или произошла ошибка.
							</span>
						) : (
							data?.map((module, idx) => {
								const materials = module.materials || []
								const completed_materials = materials.filter(material =>
									purchased_course.completed_materials.includes(material.id)
								)
								const moduleId = `module-${idx}`

								return (
									<div key={`${idx}`} className={styles['module']}>
										<div
											className={styles['module_header']}
											onClick={() => toggleModule('module', moduleId)}
										>
											<div className={styles['module_block']}>
												Модуль {idx + 1}
											</div>
											<div className={styles['col']}>
												<h4>{module.name}</h4>
												<div className={styles.completed}>
													Пройдено материалов{' '}
													<span>
														{completed_materials.length}/{materials.length}
													</span>
												</div>
											</div>
											<button className={styles.arrow_clicker}>
												{active.module === moduleId ? (
													<IoIosArrowUp />
												) : (
													<IoIosArrowDown />
												)}
											</button>
										</div>
										{active.module === moduleId && (
											<Animate className={styles.materials}>
												{materials.map((material, idx) => {
													const isCompleted = completed_materials.find(
														v => v.id == material.id
													)
													return (
														<button
															key={material.id}
															className={clsx(`${styles['material']}`, {
																[styles.isCompleted]: isCompleted,
																[styles.active]: active.material === material.id
															})}
															onClick={() =>
																toggleModule('material', material.id)
															}
														>
															<figure>
																{/* @ts-ignore */}
																<img src='/images/material_image.png' alt='' />
															</figure>
															<div className={styles['material_col']}>
																<h4>
																	{idx + 1} {material.title}
																</h4>
																<span>Урок</span>
															</div>
														</button>
													)
												})}
											</Animate>
										)}
									</div>
								)
							})
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CourseMaterials

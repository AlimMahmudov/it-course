'use client'
import Animate from '@/shared/components/animate/Animate'
import { useGetCourseModulesQuery } from '@/shared/redux/api/courses'
import clsx from 'clsx'
import React, { useState } from 'react'
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
	const [activeVideoUrl, setActiveVideoUrl] = useState('')
	const { data, isError, isLoading } = useGetCourseModulesQuery({
		course_id: course.id,
		materials_returned: true
	})
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<section className={styles.course_materials}>
			<div className={clsx(styles.container, 'container')}>
				<h3>ПРОГРАММА КУРСА</h3>
				<div className={styles['row']}>
					<div className={styles.left}>
						{active.material && active.module && activeVideoUrl ? (
							<Animate className={styles.iframe_block} key={active.material}>
								<iframe
									width='100%'
									height='100%'
									src={activeVideoUrl}
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen
								></iframe>
							</Animate>
						) : (
							<div className={styles.no_selected}>Нет выбранного материала</div>
						)}
					</div>
					<div className={styles['modules']}>
						{isLoading ? (
							<div className='centered-container none'>
								<span className='loader v2'></span>
							</div>
						) : !data || data.length === 0 ? (
							<span className={styles.error}>Данные отсутствуют.</span>
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
															onClick={() => {
																toggleModule('material', material.id)
																setActiveVideoUrl(material.video_url)
															}}
														>
															<figure>
																{/* @ts-ignore */}
																<img src='/images/material_image.png' alt='' />
															</figure>
															<div className={styles['material_col']}>
																<h4>
																	<span>{idx + 1}</span> {material.title}
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

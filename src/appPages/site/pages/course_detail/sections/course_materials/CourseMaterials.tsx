import Animate from '@/shared/components/animate/Animate'
import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import styles from './CourseMaterials.module.scss'

interface ICourseMaterialsProps {
	course: ICourse
	purchased_course: IPuschasedCourse | undefined
}
const CourseMaterials: React.FC<ICourseMaterialsProps> = ({
	course,
	purchased_course
}) => {
	const [active, setActive] = useState({ module: '', material: '' })
	const toggleModule = useCallback(
		(key: keyof typeof active, id: string) => {
			setActive(p => ({
				...p,
				[key]: id
			}))
		},
		[setActive]
	)
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
						{course.program.modules.map((module, idx) => {
							const materials = module.materials || []
							const completed_materials = materials.filter(material =>
								purchased_course?.materials.completeds.includes(material.id)
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
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CourseMaterials

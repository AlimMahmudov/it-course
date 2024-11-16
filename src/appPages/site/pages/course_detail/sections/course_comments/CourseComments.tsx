'use client'
import { useGetMaterialCommentsQuery } from '@/shared/redux/api/modules'
import React from 'react'
import SendComment from './components/send_comment/SendComment'
import styles from './CourseComments.module.scss'

type TProps = {
	material_id: string
}

const CourseComments: React.FC<TProps> = ({ material_id }) => {
	const { data, isLoading, isError } = useGetMaterialCommentsQuery(material_id)

	return (
		<section className={styles.course_comments}>
			<div className='container'>
				<div>
					<h2>Комментарии</h2>
				</div>
				{!material_id ? (
					<span className={styles.no_selected}>No selected material</span>
				) : isLoading ? (
					<span>Загрузка...</span>
				) : isError || !data || data.length === 0 ? (
					<span className={styles.error}>
						Данные отсутствуют или произошла ошибка.
					</span>
				) : (
					<>
						<SendComment />
						<div className={styles.comment_list}></div>
					</>
				)}
			</div>
		</section>
	)
}

export default CourseComments

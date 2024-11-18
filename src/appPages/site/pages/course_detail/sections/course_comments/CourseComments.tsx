'use client'
import { useGetMaterialCommentsQuery } from '@/shared/redux/api/modules'
import React from 'react'
import CommentList from './components/comment_list/CommentList'
import SendComment from './components/send_comment/SendComment'
import styles from './CourseComments.module.scss'

type TProps = {
	material_id: string
}

const CourseComments: React.FC<TProps> = ({ material_id }) => {
	const { data, isLoading } = useGetMaterialCommentsQuery(material_id)

	return (
		<section className={styles.course_comments}>
			<div className='container'>
				<div>
					<h2>Комментарии</h2>
				</div>
				{!material_id ? (
					<span className={styles.no_selected}>Нет выбранного материала</span>
				) : isLoading ? (
					<div className='centered-container none'>
						<span className='loader v2'></span>
					</div>
				) : data && data.length > 0 ? (
					<>
						<SendComment material_id={material_id} />
						<CommentList material_id={material_id} comments={data} />
					</>
				) : (
					<>
						<SendComment material_id={material_id} />
						<span>Отсутствуют комментари.</span>
					</>
				)}
			</div>
		</section>
	)
}

export default CourseComments

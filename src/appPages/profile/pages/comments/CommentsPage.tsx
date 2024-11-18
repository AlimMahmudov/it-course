'use client'
import React from 'react'
import styles from './CommentsPage.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import { formatCommentDate } from '@/shared/utils/formatting'

type TComment = {
	content: string
	sender_info: {
		fullname: string
		profile_pic: string
	}
	created_at: string
	updated_at: string
	material_id: string
}

const CommentsPage: React.FC = () => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('comments')

	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}

	console.log(data)

	return (
		<div className={styles.comments_page}>
			{isLoading ? (
				<div className='centered-container none'>
					<span className='loader v2'></span>
				</div>
			) : (
				<>
					<h1>Комментарии</h1>
					{data.length === 0 ? (
						<p>Вы еще не написали комментариев.</p>
					) : (
						<div className={styles.commentList}>
							{data.map((comment: TComment) => (
								<div key={comment.material_id} className={styles.commentItem}>
									<figure>
										{/* @ts-ignore */}
										<img
											src={comment.sender_info.profile_pic}
											alt={comment.sender_info.fullname}
											className={styles.profilePic}
										/>
									</figure>
									<div className={styles._content}>
										<div className={styles['sender']}>
											<h4>{comment.sender_info.fullname}</h4>
											<span>/ {formatCommentDate(comment.created_at)}</span>
										</div>
										<p className={styles.content}>{comment.content}</p>
									<div className={styles.actions}>
										<button className={styles.edit}>Редактировать</button>
										<button className={styles.delete}>Удалить</button>
									</div>
									</div>
								</div>
							))}
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default CommentsPage

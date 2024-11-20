'use client'
import React, { useCallback, useState } from 'react'
import styles from './CommentsPage.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import { formatCommentDate } from '@/shared/utils/formatting'
import { useDeleteCommentMutation } from '@/shared/redux/api/modules'
import ConfirmModal from '@/shared/components/confirm_modal/ConfirmModal'

type TComment = {
	content: string
	comment_id: string
	sender_info: {
		fullname: string
		profile_pic: string
	}
	created_at: string
	updated_at: string
	material_id: string
}

const CommentsPage: React.FC = () => {
	const { data, isLoading, isError } = useGetMeInfoQuery('comments')
	const [deleteComment, setDeleteComment] = useState<string | null>(null)
	const [mutate, { error }] = useDeleteCommentMutation()
	const confirmCallback = useCallback(async () => {
		if (!deleteComment) return
		const { data } = await mutate({ comment_id: deleteComment })
		if (data && data.message) {
			setDeleteComment(null)
			alert(data.message)
		}
	}, [deleteComment])
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}

	return (
		<div className={styles.comments_page}>
			{deleteComment !== null && (
				<ConfirmModal
					confirm_callback={confirmCallback}
					text='Вы уверены что хотите удалить этот комментарий?'
					onClose={() => setDeleteComment(null)}
					error={JSON.stringify((error as any)?.data?.detail ?? error)}
				/>
			)}
			{isLoading ? (
				<div className='centered-container none'>
					<span className='loader v2'></span>
				</div>
			) : (
				<>
					<h1>Комментарии</h1>
					{!data || data.length === 0 ? (
						<p>Вы еще не написали комментариев.</p>
					) : (
						<div className={styles.commentList}>
							{data.map((comment: TComment) => (
								<div key={comment.created_at} className={styles.commentItem}>
									<figure>
										{comment.sender_info?.profile_pic ? (
											<>
												{/* @ts-ignore */}
												<img
													src={comment.sender_info?.profile_pic}
													alt={`${comment.sender_info?.fullname} | Profile Picture`}
												/>
											</>
										) : (
											<div className={styles.profile_placeholder}>
												{/* @ts-ignore */}
												<img
													src='/images/profile_pic_placeholder.svg'
													alt='Profile picture placeholder'
												/>
											</div>
										)}
									</figure>
									<div className={styles._content}>
										<div className={styles['sender']}>
											<h4>{comment.sender_info.fullname}</h4>
											<span>/ {formatCommentDate(comment.created_at)}</span>
										</div>
										<p className={styles.content}>{comment.content}</p>
										<div className={styles.actions}>
											<button className={styles.edit}>Редактировать</button>
											<button
												onClick={() => setDeleteComment(comment.comment_id)}
												className={styles.delete}
											>
												Удалить
											</button>
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

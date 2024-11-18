import React, { useEffect, useState } from 'react'
import styles from './CommentList.module.scss'
import { formatCommentDate } from '@/shared/utils/formatting'
import SendComment from '../send_comment/SendComment'
import clsx from 'clsx'
import Link from 'next/link'

type TProps = {
	comments: ModuleTypes.MaterialComment[]
	material_id: string
}

const CommentList: React.FC<TProps> = ({ comments, material_id }) => {
	const [reply_to, setReplyTo] = useState<string | null>(null)
	const [visibleReplies, setVisibleReplies] = useState<Set<string>>(new Set())
	const [scrollComment, setScrollComment] = useState<string | undefined>(
		undefined
	)
	const toggleRepliesVisibility = (id: string) => {
		setVisibleReplies(prev => {
			const updated = new Set(prev)
			if (updated.has(id)) {
				updated.delete(id)
			} else {
				updated.add(id)
			}
			return updated
		})
	}
	useEffect(() => {
		if (scrollComment) {
			const element = document.getElementById(scrollComment)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}

			setTimeout(() => {
				setScrollComment(undefined)
			}, 5000)
		}
	}, [scrollComment])
	return (
		<div className={styles.commentList}>
			{comments.map(comment => (
				<div
					key={comment.id}
					className={clsx(styles.commentItem, {
						[styles.reply_to]: comment.reply_to,
						[styles.scroll]: scrollComment === comment.id
					})}
					id={comment.id}
				>
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
						<p className={styles.content}>
							{' '}
							<Link
								onClick={() => setScrollComment(comment?.reply_to)}
								href={`#${comment?.reply_to}`}
								className={styles.id}
							>
								{comment?.reply_info?.id}
							</Link>{' '}
							{comment.content}
						</p>

						<div className={styles['row']}>
							<button
								onClick={() => setReplyTo(comment.id)}
								className={styles.reply}
							>
								Ответить
							</button>
							{comment.replies && comment.replies.length > 0 && (
								<button
									className={styles.toggleReplies}
									onClick={() => toggleRepliesVisibility(comment.id)}
								>
									{visibleReplies.has(comment.id)
										? `Скрыть ответы (${comment.replies.length})`
										: `Показать ответы (${comment.replies.length})`}
								</button>
							)}
						</div>
						{reply_to === comment.id && (
							<SendComment
								onClose={() => setReplyTo('')}
								reply_to={reply_to}
								material_id={material_id}
							/>
						)}

						{comment.replies && comment.replies.length > 0 && (
							<>
								{visibleReplies.has(comment.id) && (
									<div className={styles.replies}>
										<CommentList
											comments={comment.replies}
											material_id={material_id}
										/>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			))}
		</div>
	)
}

export default CommentList

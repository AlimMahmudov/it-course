'use client'
import React, { useCallback, useState } from 'react'
import styles from './SendComment.module.scss'
import { useSendCommentMutation } from '@/shared/redux/api/modules'
import clsx from 'clsx'

type TProps = {
	onClose?(): void
	material_id: string
	reply_to?: string
}

const SendComment: React.FC<TProps> = ({ material_id, reply_to, onClose }) => {
	const [content, setContent] = useState('')
	const handleChangeContent = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			const value = e.target.value
			setContent(value)
		},
		[]
	)
	const [mutate, { isLoading }] = useSendCommentMutation()
	const send = useCallback(async () => {
		if (content.trim() == '') return
		const body = { content, reply_to }
		const { data } = await mutate({ material_id, body })
		if (data && data?.message) {
			onClose && onClose()
		}
	}, [material_id, content, reply_to, onClose])
	return (
		<div
			className={clsx(styles.send_comment, {
				[styles.reply]: reply_to
			})}
		>
			<textarea
				name='comment-content'
				placeholder='Ваш комментарий'
				value={content}
				onChange={handleChangeContent}
				id='comment-content'
			></textarea>
			<div className={styles['actions']}>
				<button onClick={send} className={styles.send}>
					{isLoading ? <span className='loader small v2'></span> : 'Отправить'}
				</button>
				{onClose && <button onClick={onClose}>Отмена</button>}
			</div>
		</div>
	)
}

export default SendComment

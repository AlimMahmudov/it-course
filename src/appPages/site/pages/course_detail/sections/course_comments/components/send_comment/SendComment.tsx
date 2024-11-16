'use client'
import React from 'react'
import styles from './SendComment.module.scss'

const SendComment: React.FC = () => {
	return (
		<div className={styles.send_comment}>
			<textarea
				name='comment-content'
				placeholder='Ваш комментарий'
				id='comment-content'
			></textarea>
			<button>Отправить </button>
		</div>
	)
}

export default SendComment

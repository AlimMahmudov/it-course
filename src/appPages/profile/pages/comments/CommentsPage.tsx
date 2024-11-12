'use client'
import React from 'react'
import styles from './CommentsPage.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'

const CommentsPage: React.FC = () => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('comments')

	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}

	return (
		<div className={styles.comments_page}>
			{isLoading ? (
				<span>Загрузка...</span>
			) : (
				<>
					<h1>Коментарии</h1>
					{data.length === 0 && <p>Вы еще не написали комментариев.</p>}
				</>
			)}
		</div>
	)
}

export default CommentsPage

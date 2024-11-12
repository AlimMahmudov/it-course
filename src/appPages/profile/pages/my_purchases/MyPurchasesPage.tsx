'use client'
import React from 'react'
import styles from './MyPurchasesPage.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
const MyPurchasesPage: React.FC = () => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('my_purchases')

	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}

	return (
		<div className={styles.my_purchases_page}>
			{isLoading ? (
				<span>Загрузка...</span>
			) : (
				<>
					<h1>Мои покупки</h1>
					{data.length === 0 && <p>У вас нету покупок.</p>}
				</>
			)}
		</div>
	)
}

export default MyPurchasesPage

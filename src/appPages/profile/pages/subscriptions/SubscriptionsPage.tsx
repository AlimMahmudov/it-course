'use client'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import React from 'react'
import OtherSubscriptions from './components/other_subscriptions/OtherSubscriptions'
import styles from './SubscriptionsPage.module.scss'

const SubscriptionsPage: React.FC = () => {
	const { data, isLoading, isError, } = useGetMeInfoQuery('subscriptions')

	return (
		<div className={styles.subscriptions_page}>
			{isLoading ? (
				<span>Загрузка...</span>
			) : isError || !data || data.length === 0 ? (
				<span className={styles.error}>
					Данные отсутствуют или произошла ошибка.
				</span>
			) : (
				<>
					<h1>Подписки</h1>
					{data.length === 0 && <p>У вас нет активных подписок.</p>}
					<OtherSubscriptions />
				</>
			)}
		</div>
	)
}

export default SubscriptionsPage

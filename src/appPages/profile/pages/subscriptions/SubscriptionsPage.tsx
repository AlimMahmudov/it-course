'use client'
import React from 'react'
import styles from './SubscriptionsPage.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import OtherSubscriptions from './components/other_subscriptions/OtherSubscriptions'

const SubscriptionsPage: React.FC = () => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('subscriptions')

	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}

	return (
		<div className={styles.subscriptions_page}>
			{isLoading ? (
				<span>Загрузка...</span>
			) : (
				<>
					<h1>Подписки</h1>
					{data.length === 0 && <p>У вас нет активных подписок.</p>}
					<OtherSubscriptions subscriptions={data} />
				</>
			)}
		</div>
	)
}

export default SubscriptionsPage

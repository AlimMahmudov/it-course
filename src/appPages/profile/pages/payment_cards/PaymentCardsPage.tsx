'use client'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import React from 'react'
import AddCardBlock from './components/add_card/AddCardBlock'
import styles from './PaymentCardsPage.module.scss'
const PaymentCardsPage: React.FC = () => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('payment_cards')
	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}
	return (
		<div className={styles.payment_cards_page}>
			{isLoading ? (
				<span>Загрузка...</span>
			) : (
				<>
					<h1>Платежные карты</h1>
					<AddCardBlock />
				</>
			)}
		</div>
	)
}

export default PaymentCardsPage

'use client'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import React from 'react'
import AddCardBlock from './components/add_card/AddCardBlock'
import CardList from './components/card_list/CardList'

const PaymentCardsPage: React.FC = () => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('payment_cards')
	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}

	return (
		<div className={'base-page'}>
			{isLoading ? (
				<span>Загрузка...</span>
			) : (
				<>
					<h1>Платежные карты</h1>
					<CardList list={data} />
					<AddCardBlock />
				</>
			)}
		</div>
	)
}

export default PaymentCardsPage

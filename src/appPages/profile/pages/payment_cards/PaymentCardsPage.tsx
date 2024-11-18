'use client'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import React from 'react'
import AddCardBlock from './components/add_card/AddCardBlock'
import CardList from './components/card_list/CardList'

const PaymentCardsPage: React.FC = () => {
	const { data, isLoading, isError } = useGetMeInfoQuery('payment_cards')
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<div className={'base_page'}>
			{isLoading ? (
				<div className='centered-container none'>
					<span className='loader v2'></span>
				</div>
			) : (
				<>
					<h1>Платежные карты</h1>
					{!data || data.length === 0 ? (
						<span>У вас нету платежных карт</span>
					) : (
						<CardList list={data} />
					)}
					<AddCardBlock />
				</>
			)}
		</div>
	)
}

export default PaymentCardsPage

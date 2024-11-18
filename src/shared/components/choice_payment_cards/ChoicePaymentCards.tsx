import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import React from 'react'
import Animate from '../animate/Animate'
import styles from './ChoicePaymentCards.module.scss'

type TProps = {
	choise(
		card_data: Omit<UserTypes.PaymentCard, 'id' | 'user_id' | 'is_active'>
	): void
}

const ChoicePaymentCards: React.FC<TProps> = ({ choise }) => {
	const { data, isLoading, isError } = useGetMeInfoQuery('payment_cards')
	if (!data || data.length == 0) return
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<Animate className={styles.choice_payment_cards}>
			{isLoading ? (
				<div className='centered-container none'>
					<span className='loader v2'></span>
				</div>
			) : !data || data.length === 0 ? (
				<span>Данные отсутствуют.</span>
			) : (
				<div className={styles.cards}>
					{data.map(card => (
						<div key={card.card_number} className={styles.card}>
							<div>{card.card_type}</div>
							<div>**** **** **** {card.card_number.slice(-4)}</div>
							<button
								className={styles['select_button']}
								onClick={() => choise(card)}
								type='button'
							>
								Выбрать
							</button>
						</div>
					))}
				</div>
			)}
		</Animate>
	)
}

export default ChoicePaymentCards

import React from 'react'
import styles from './ChoicePaymentCards.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import { formatExpiryDate } from '@/shared/utils/formatting'
import Animate from '../animate/Animate'

type TProps = {
	choise(
		card_data: Omit<UserTypes.PaymentCard, 'id' | 'user_id' | 'is_active'>
	): void
}

const ChoicePaymentCards: React.FC<TProps> = ({ choise }) => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('payment_cards')

	return (
		<Animate className={styles.choice_payment_cards}>
			{isLoading ? (
				<span className={styles.loading}>Загрузка...</span>
			) : isError || !data || data.length === 0 ? (
				<span className={styles.error}>
					Данные отсутствуют или произошла ошибка.
				</span>
			) : (
				<>
					<h3 className={styles.title}>Выберите платежную карту</h3>
					<div className={styles.cards}>
						{data.map(card => (
							<div
								key={card.id}
								className={`${styles.card} ${
									card.is_active ? styles.active : ''
								}`}
							>
								<div className={styles.card_info}>
									<div className={styles.card_type}>{card.card_type}</div>
									<div className={styles.card_number}>
										**** **** **** {card.card_number.slice(-4)}
									</div>
									<div className={styles.expiration_date}>
										Срок действия: {formatExpiryDate(card.expiration_date)}
									</div>
								</div>
								<button
									onClick={() => {
										choise(card)
									}}
									type='button'
									className={styles.select_button}
								>
									Выбрать
								</button>
							</div>
						))}
					</div>
				</>
			)}
		</Animate>
	)
}

export default ChoicePaymentCards

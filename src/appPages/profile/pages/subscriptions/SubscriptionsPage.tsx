'use client'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import { formatEndDate } from '@/shared/utils/formatting'
import React from 'react'
import OtherSubscriptions from './components/other_subscriptions/OtherSubscriptions'
import styles from './SubscriptionsPage.module.scss'

type TUserPlans = {
	id: string
	plan_id: string
	start_date: string
	end_date: string
	plan_name: string
	payment_card_number: string
	subscription_status: string
	subscription_is_active: boolean
	subscription_price: string
	rate: string
}

const SubscriptionsPage: React.FC = () => {
	const { data, isLoading, isError } = useGetMeInfoQuery('plans')
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<div className={styles.subscriptions_page}>
			{isLoading ? (
				<div className='centered-container none'>
					<span className='loader v2'></span>
				</div>
			) : (
				<>
					<h1>Подписки</h1>
					<div className={styles.plan_list}>
						{!data || data.length === 0 ? (
							<span>У вас нет активных подписок.</span>
						) : (
							(data as TUserPlans[]).map(plan => (
								<div key={plan.id} className={styles.plan}>
									<div className={styles.row}>
										<span>Тариф :</span>
										<span>{plan.rate == 'month' ? 'Месяц' : 'Год'}</span>
									</div>
									<div className={styles.row}>
										<span>Cтатус :</span>
										<span>{plan.subscription_status}</span>
									</div>
									<div className={styles.row}>
										<span>Сумма :</span>
										<span>{plan.subscription_price}</span>
									</div>
									<div className={styles.row}>
										<span>Карта :</span>
										<span>
											**** **** **** {plan.payment_card_number.slice(-4)}
										</span>
									</div>
									<div className={styles.row}>
										<span>Действует до :</span>
										<span>{formatEndDate(plan.end_date)}</span>
									</div>
								</div>
							))
						)}
					</div>
					<OtherSubscriptions active_subscription_id={data && data[0] ? data[0].plan_id: ''} />
				</>
			)}
		</div>
	)
}

export default SubscriptionsPage

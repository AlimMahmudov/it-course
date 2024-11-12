import React from 'react'
import styles from './OtherSubscriptions.module.scss'
import { useGetSubscriptionsQuery } from '@/shared/redux/api/subscriptions'
import clsx from 'clsx'
import Link from 'next/link'
type TProps = {
	subscriptions: []
}
const OtherSubscriptions: React.FC<TProps> = () => {
	const { data, isLoading, isError, error } = useGetSubscriptionsQuery()
	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}
	return (
		<div
			className={clsx(
				data.length == 0 && styles.empty,
				styles.other_subscriptions
			)}
		>
			{isLoading ? (
				<span>Загрузка...</span>
			) : (
				<div className={styles.subscription_list}>
					{data.map(subscription => (
						<div key={subscription.id} className={styles.box}>
							<div className={styles.box_text}>
								<h3>{subscription.name}</h3>
								<h1>{subscription.price} $</h1>
								<span>
									{subscription.duration == 'month' ? 'Ежемесячно' : 'Ежегодно'}
								</span>
								<ul>
									{subscription.subscription_benefits.map((benefits, idx) => (
										<li key={`${idx}`}>
											<svg
												width='18'
												height='19'
												viewBox='0 0 18 19'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M15.1875 5.41309L7.3125 13.322L3.375 9.36755'
													stroke='black'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>

											{benefits}
										</li>
									))}
								</ul>
							</div>
							<Link
								href={`/subscribe_now?plan_id=${subscription.id}`}
								className={styles.btn}
							>
								Оформить подписку
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default OtherSubscriptions

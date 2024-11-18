import { useGetPlansQuery } from '@/shared/redux/api/plans'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import styles from './OtherSubscriptions.module.scss'

const OtherSubscriptions: React.FC<{ active_subscription_id: string }> = ({
	active_subscription_id
}) => {
	const { data, isLoading, isError } = useGetPlansQuery()
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<div
			className={clsx(
				data?.length == 0 && styles.empty,
				styles.other_subscriptions
			)}
		>
			{isLoading ? (
				<div className='centered-container none'>
					<span className='loader v2'></span>
				</div>
			) : !data || data.length === 0 ? (
				<span className={styles.error}>Данные отсутствуют.</span>
			) : (
				<div className={styles.subscription_list}>
					{data
						.filter(d => d.id !== active_subscription_id)
						.map(subscription => (
							<div key={subscription.id} className={styles.box}>
								<div className={styles.box_text}>
									<h3>{subscription.name}</h3>
									<h1>{subscription.price} $</h1>
									<span>
										{subscription.duration == 'month'
											? 'Ежемесячно'
											: 'Ежегодно'}
									</span>
									<ul>
										{subscription.benefits.map((benefits, idx) => (
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

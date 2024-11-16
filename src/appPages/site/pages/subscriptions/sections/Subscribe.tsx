'use client'
import { useGetSubscriptionsQuery } from '@/shared/redux/api/subscriptions'
import Link from 'next/link'
import scss from './Subscribe.module.scss'

const Subscribe = () => {
	const { data, isLoading, isError } = useGetSubscriptionsQuery()
	return (
		<div id={scss.Subscribe}>
			<div className='container'>
				<div className={scss.subscribe}>
					<div className={scss.p}>
						<h1>Выберите свой пакет участия</h1>
					</div>

					{isLoading ? (
						<span>Загрузка...</span>
					) : isError || !data || data.length === 0 ? (
						<span>
							Данные отсутствуют или произошла ошибка.
						</span>
					) : (
						<div className={scss.block}>
							{data.map(subscription => (
								<div key={subscription.id} className={scss.box}>
									<div className={scss.box_text}>
										<h3>{subscription.name}</h3>
										<h1>{subscription.price} $</h1>
										<span>
											{subscription.duration == 'month'
												? 'Ежемесячно'
												: 'Ежегодно'}
										</span>
										<ul>
											{subscription.subscription_benefits.map(
												(benefit, idx) => (
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

														{benefit}
													</li>
												)
											)}
										</ul>
									</div>
									<Link
										href={`/subscribe_now?plan_id=${subscription.id}`}
										className={scss.btn}
									>
										Оформить подписку
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Subscribe

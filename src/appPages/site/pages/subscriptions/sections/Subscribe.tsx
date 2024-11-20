'use client'
import { useGetPlansQuery } from '@/shared/redux/api/plans'
import Link from 'next/link'
import scss from './Subscribe.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'

const Subscribe = () => {
	const { data, isLoading, isError } = useGetPlansQuery()
	const { data: plans } = useGetMeInfoQuery('plans')
	const findPlan = data?.find(
		plan =>
			Array.isArray(plans) &&
			plan.id == (plans as UserTypes.TUserPlans[])[0].plan_id
	)
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<div id={scss.Subscribe}>
			<div className='container'>
				<div className={scss.subscribe}>
					<div className={scss.p}>
						<h1>Выберите свой пакет участия</h1>
					</div>

					{isLoading ? (
						<div className='centered-container none'>
							<span className='loader v2'></span>
						</div>
					) : !data || data.length === 0 ? (
						<span>Данные отсутствуют.</span>
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
											{subscription.benefits.map((benefit, idx) => (
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
											))}
										</ul>
									</div>
									{findPlan && findPlan.id === subscription.id ? (
										<>
											<Link
												href={`/profile/subscriptions`}
												className={scss.btn}
											>
												Уже приобретено
											</Link>
										</>
									) : (
										<Link
											href={`/subscribe_now?plan_id=${subscription.id}`}
											className={scss.btn}
										>
											Оформить подписку
										</Link>
									)}
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

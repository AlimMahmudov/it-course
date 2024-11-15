'use client'
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import { useGetSubscriptionsQuery } from '@/shared/redux/api/subscriptions'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import SubscribeForm from './components/subscribe_form/SubscribeForm'
import styles from './SubscribeNow.module.scss'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Оформить подписку', href: '#this' }
]
const SubscribeNow: React.FC = () => {
	const { data, isLoading, isError, error } = useGetSubscriptionsQuery()

	const searchParams = useSearchParams()
	const plan_id = searchParams.get('plan_id')
	const findPlan = data?.find(plan => plan.id == plan_id)
	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}
	if (!plan_id || !findPlan) {
		return <div className='centered-container none'>Несоответсие данных</div>
	}
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<div className='container'>
				{isLoading ? (
					<span>Загрузка...</span>
				) : (
					<div className={styles.cn}>
						<h1>{findPlan.name}</h1>
						<SubscribeForm subscription={findPlan} />
						<div className={styles['info']}>
							<ul>
								{findPlan.subscription_benefits.map((benefit, idx) => (
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
												stroke='#fff'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>

										{benefit}
									</li>
								))}
							</ul>
							<h4>Другие варианты подписки: </h4>
							<ul className={styles.other_plans}>
								{data
									.filter(plan => plan.id !== plan_id)
									.map((plan, idx) => {
										const duration = plan.duration == 'month' ? 'месяц' : 'год'
										return (
											<li key={`${idx}`}>
												<Link href={`/subscribe_now?plan_id=${plan.id}`}>
													<span>{plan.name}</span>
													{' - '}
													<span>
														{plan.price} $ / {duration}
													</span>
												</Link>
											</li>
										)
									})}
							</ul>
							<p>
								Отменить можно в любой <br /> момент!
							</p>
							<p>
								При оплате через Fondy, с Вашей карты автоматически будут
								списываться 225,00 $/год, которые являются стандартной ценой
								участия.
							</p>
							<p>
								Вы всегда можете отменить подписку в Вашем личном кабинете и
								больше списаний не будет.
							</p>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default SubscribeNow

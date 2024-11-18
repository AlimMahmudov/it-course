'use client'
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import OutcomeMessage from '@/shared/components/outcome_message/OutcomeMessage'
import PaymentProcessForm from '@/shared/components/payment_process_form/PaymentProcessForm'
import {
	useGetPlansQuery,
	useSubscribePlanMutation
} from '@/shared/redux/api/plans'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import styles from './SubscribeNow.module.scss'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Оформить подписку', href: '#this' }
]
const SubscribeNow: React.FC = () => {
	const { data, isLoading, isError } = useGetPlansQuery()
	const [open, setOpen] = useState(false)

	const searchParams = useSearchParams()
	const plan_id = searchParams.get('plan_id')
	const findPlan = data?.find(plan => plan.id == plan_id)
	const [mutate, { error: mError }] = useSubscribePlanMutation()
	const e = mError as unknown as { data: any }
	const error_message =
		e?.data && e.data?.detail ? e.data?.detail : JSON.stringify(e?.data)

	const onsubmit = useCallback(
		async (arg: IProcessPaymentArg) => {
			const { data } = await mutate({ plan_id: String(plan_id), body: arg })
			if (data && data.message) {
				setOpen(true)
			}
		},
		[mutate]
	)
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<OutcomeMessage
				open={open}
				onClose={() => setOpen(false)}
				title='Благодарим за покупку!!!'
				description={`Теперь вам доступен планова подписка - “${findPlan?.name}”`}
				label='Ок, посмотреть покупку'
				redirect_url='/profile/my_purchases'
			/>
			<div className='container'>
				{isLoading ? (
					<div className='centered-container none'>
						<span className='loader v2'></span>
					</div>
				) : !data || data.length === 0 ? (
					<span>Данные отсутствуют.</span>
				) : !plan_id || !findPlan ? (
					<div className='centered-container none'>Несоответсие данных</div>
				) : (
					<div className={styles.cn}>
						<h1>{findPlan.name}</h1>
						<PaymentProcessForm
							error_message={error_message}
							onSubmit={onsubmit}
							price={findPlan.price}
						/>
						<div className={styles['info']}>
							<ul>
								{findPlan.benefits.map((benefit, idx) => (
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

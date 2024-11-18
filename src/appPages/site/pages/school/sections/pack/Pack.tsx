'use client'
import { useGetPlansQuery } from '@/shared/redux/api/plans'
import { useLanguageStore } from '@/shared/stores/Language'
import Link from 'next/link'
import scss from './Pack.module.scss'

const Pack = () => {
	const { translate } = useLanguageStore()
	const { data, isLoading, isError } = useGetPlansQuery()
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<div id={scss.Pack}>
			<div className='container'>
				<div className={scss.pack}>
					<div className={scss.pack_text}>
						<h1>{translate('Пакет деңгээлдери', 'Уровень пакетов')}</h1>
						<p>
							{translate(
								'Чегеримдер автоматтык түрдө жүргүзүлөт. Сиз ар дайым өздүк кабинеттен жазылууну токтотуп, дагы чегеримдер болбойт.',
								'Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет'
							)}
						</p>
					</div>
					{isLoading ? (
						<div className='centered-container none'>
							<span className='loader v2'></span>
						</div>
					) : !data || data.length === 0 ? (
						<span>Данные отсутствуют.</span>
					) : (
						<div className={scss.pack_block}>
							{data.map(subscription => (
								<div key={subscription.id} className={scss.pack_box}>
									<div className={scss.box1}>
										<h2>{subscription.name}</h2>
										<ul>
											{subscription.benefits.map((benefit, idx) => (
												<li key={`benefit-${idx}`}>
													{benefit}
													{subscription.benefits.length !== idx + 1 && ','}
												</li>
											))}
										</ul>
									</div>
									<div className={scss.box2}>
										<h1>{subscription.price} $</h1>
										<p>
											{subscription.duration == 'month'
												? 'Ежемесячно'
												: 'Ежегодно'}
										</p>
									</div>
									<div className={scss.pack_buttons}>
										<Link
											href={`/subscribe_now?plan_id=${subscription.id}`}
											className={scss.btn1}
										>
											{translate(
												'Жазылууну рәсмилештирүү',
												'Оформить подписку'
											)}
										</Link>
										<button className={scss.btn2}>
											{translate('Көбүрөөк маалымат', 'Подробнее')}
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Pack

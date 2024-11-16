'use client'
import { useLanguageStore } from '@/shared/stores/Language'
import Link from 'next/link'
import scss from './Subscribe.module.scss'

const Subscribe = () => {
	const { translate } = useLanguageStore()

	return (
		<div id={scss.Subscribe}>
			<div className='container'>
				<div className={scss.subscribe}>
					<div className={scss.subscribe_text}>
						<h2>
							{translate(
								'Азыр катталыңыз 19,00 $ / ай үчүн',
								'Подпишитесь сейчас за 19,00 $ / мес'
							)}
						</h2>
						<p>
							{translate(
								'Жана материалдарга жана учурларга, ошондой эле жаңы мастер-класстарга жетүү мүмкүнчүлүгүн алыңыз',
								'И получите доступ к материалам и кейсам, а также к новым мастер-классам'
							)}
						</p>
					</div>
					<div className={scss.subscribe_buttons}>
						<button>{translate('Жазылуу', 'Оформить подписку')}</button>
						<Link href='/subscription'>
							{translate(
								'Пакеттер жөнүндө көбүрөөк маалымат',
								'Подробнее о пакетах'
							)}
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subscribe

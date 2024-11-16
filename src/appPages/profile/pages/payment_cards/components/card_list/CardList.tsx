import React from 'react'
import styles from './CardList.module.scss'
import XBG from '@/shared/assets/payment/xbg.svg'
import Surge from '@/shared/assets/payment/surge.svg'
import VisaType from '@/shared/assets/payment/visa_type.svg'
import Image from 'next/image'
import { formatExpiryDate } from '@/shared/utils/formatting'
type TProps = {
	list: UserTypes.PaymentCard[]
}

const CardList: React.FC<TProps> = ({ list }) => {
	return (
		<div className={styles.card_list}>
			{list.length == 0 ? (
				<p data-empty>У вас нету платежных карт</p>
			) : (
				list.map(card => (
					<div key={card.id} className={styles.card}>
						<h4>
							{card.card_type === 'Visa'
								? 'Visa Classic'
								: card.card_type === 'MasterCard'
								? 'Master Card'
								: ''}
						</h4>
						<div className={styles.nfc}>
							<Image src={XBG} alt='xbg | assets image' />
							<Image src={Surge} alt='surge | assets image' />
						</div>
						<p>{card.card_number}</p>
						<span>{formatExpiryDate(card.expiration_date)}</span>
						<div className={styles['visa_type']}>
							<Image src={VisaType} alt={`card_type = ${card.card_type}`} />
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default CardList

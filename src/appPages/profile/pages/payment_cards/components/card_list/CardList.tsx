import React from 'react'
import styles from './CardList.module.scss'
import XBG from '@/shared/assets/payment/xbg.svg'
import Surge from '@/shared/assets/payment/surge.svg'
import VisaType from '@/shared/assets/payment/visa_type.svg'
import Image from 'next/image'
import { formatExpiryDate } from '@/shared/utils/formatting'
import { RxDotsVertical } from 'react-icons/rx'
import { Popup } from '@/shared/components/popup/Popup'
import { useToggle } from 'usehooks-ts'
import { MdDelete } from 'react-icons/md'

type TProps = {
	list: UserTypes.PaymentCard[]
}

const CardList: React.FC<TProps> = ({ list }) => {
	const [open, toggleOpen, setOpen] = useToggle()
	return (
		<div className={styles.card_list}>
			{list.length == 0 ? (
				<p data-empty>У вас нету платежных карт</p>
			) : (
				list.map((card, idx) => {
					return (
						<div key={card.id + idx} className={styles.card}>
							<div className={styles.actions_parent}>
								<div className={styles.actions}>
									<button onClick={toggleOpen} className={styles.btn}>
										<RxDotsVertical />
									</button>
									<Popup
										className={styles.menu}
										open={open}
										onClose={() => setOpen(false)}
										isOutsideClick
									>
										<ul className={styles.menu_list}>
											<li>
												<button>
													<span>
														<MdDelete />
													</span>
													Remove
												</button>
											</li>
										</ul>
									</Popup>
								</div>
							</div>
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
							<p>**** **** **** {card.card_number.slice(-4)}</p>
							<span>{formatExpiryDate(card.expiration_date)}</span>
							<div className={styles['visa_type']}>
								<Image src={VisaType} alt={`card_type = ${card.card_type}`} />
							</div>
						</div>
					)
				})
			)}
		</div>
	)
}

export default CardList

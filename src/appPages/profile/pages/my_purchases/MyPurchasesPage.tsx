'use client'
import { Popup } from '@/shared/components/popup/Popup'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import React, { useCallback, useState } from 'react'
import styles from './MyPurchasesPage.module.scss'

const MyPurchasesPage: React.FC = () => {
	const { data, isLoading, isError } = useGetMeInfoQuery('my_purchases')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedPurchase, setSelectedPurchase] = useState<any>(null)

	const handleRowClick = useCallback(
		(purchase: any) => {
			setSelectedPurchase(purchase)
			setIsModalOpen(true)
		},
		[setIsModalOpen, setSelectedPurchase]
	)

	const closeModal = useCallback(() => {
		setIsModalOpen(false)
		setSelectedPurchase(null)
	}, [setIsModalOpen, setSelectedPurchase])
	if (isError) {
		return (
			<div className='container'>
				<span>Данные отсутствуют или произошла ошибка.</span>
			</div>
		)
	}
	return (
		<div className={styles.my_purchases_page}>
			{isLoading ? (
				<div className='centered-container none'>
					<span className='loader v2'></span>
				</div>
			) : (
				<>
					<h1 className={styles.title}>Мои покупки</h1>
					{!data || data.length === 0 ? (
						<span>У вас нет покупок.</span>
					) : (
						<table className={styles.purchases_table}>
							<thead>
								<tr>
									<th>Дата покупки</th>
									<th>Описание</th>
									<th>Цена</th>
								</tr>
							</thead>
							<tbody>
								{data.map(purchase => (
									<tr
										key={purchase.purchase_date}
										onClick={() => handleRowClick(purchase)}
									>
										<td>
											{new Date(purchase.purchase_date).toLocaleDateString()} г
										</td>
										<td>{purchase.description}</td>
										<td>{purchase.price} $</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</>
			)}

			{isModalOpen && (
				<Popup
					open={isModalOpen}
					blur_bg
					close_btn={false}
					onClose={() => setIsModalOpen(false)}
					className={`${styles.modal} ${isModalOpen ? styles.show : ''}`}
				>
					<div className={styles.modal_content}>
						<h3>Детали покупки</h3>
						<p>
							<strong>Дата покупки:</strong>{' '}
							{new Date(selectedPurchase.purchase_date).toLocaleDateString()}
						</p>
						<p>
							<strong>Описание:</strong> {selectedPurchase.description}
						</p>
						{selectedPurchase.title_type == 'course' && (
							<p>
								<strong>Курс:</strong> {selectedPurchase.title}
							</p>
						)}
						{selectedPurchase.title_type == 'plan' && (
							<p>
								<strong>План:</strong> {selectedPurchase.title}
							</p>
						)}
						<p>
							<strong>Цена:</strong> {selectedPurchase.price} $
						</p>
						<button className={styles.close_button} onClick={closeModal}>
							Закрыть
						</button>
					</div>
				</Popup>
			)}
		</div>
	)
}

export default MyPurchasesPage

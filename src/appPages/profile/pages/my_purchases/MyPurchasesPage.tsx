'use client'
import React, { useState } from 'react'
import styles from './MyPurchasesPage.module.scss'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import { Popup } from '@/shared/components/popup/Popup'

const MyPurchasesPage: React.FC = () => {
	const { data, isLoading, isError, error } = useGetMeInfoQuery('my_purchases')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedPurchase, setSelectedPurchase] = useState<any>(null)

	if (isError || !data) {
		return <div>{JSON.stringify(error)}</div>
	}

	const handleRowClick = (purchase: any) => {
		setSelectedPurchase(purchase)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setSelectedPurchase(null)
	}

	return (
		<div className={styles.my_purchases_page}>
			{isLoading ? (
				<span>Загрузка...</span>
			) : (
				<>
					<h1 className={styles.title}>Мои покупки</h1>
					{data.length === 0 ? (
						<p className={styles.no_purchases}>У вас нет покупок.</p>
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
										<td>{purchase.price} ₽</td>
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

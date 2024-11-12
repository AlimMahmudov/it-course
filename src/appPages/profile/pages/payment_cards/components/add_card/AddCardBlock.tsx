import React from 'react'
import styles from './AddCardBlock.module.scss'
const AddCardBlock: React.FC = () => {
	return (
		<div className={styles.add_card_block}>
			<div className={styles['top']}>
				<h3>Добавить карту</h3>
				<p>
					Добавьте свою карту, чтобы больше не тратить время на ввод данных
					вручну
				</p>
			</div>
			<div className={styles['bottom']}>
				<button>Добавить карту</button>
				<p>
					Для проверки карты будет снята минимальная сумма в размере 1$. Сумма
					будет возвращена вам а течении 48 часов
				</p>
			</div>
		</div>
	)
}

export default AddCardBlock

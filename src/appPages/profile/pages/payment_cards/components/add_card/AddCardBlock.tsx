'use client'
import React from 'react'
import styles from './AddCardBlock.module.scss'
import { useToggle } from 'usehooks-ts'
import AddCardForm from '@/shared/components/add_card_form/AddCardForm'

const AddCardBlock: React.FC = () => {
	const [open, toggle, set] = useToggle(false)

	return (
		<>
			<div className={styles.add_card_block}>
				<div className={styles['top']}>
					<h3>Добавить карту</h3>
					<p>
						Добавьте свою карту, чтобы больше не тратить время на ввод данных
						вручную
					</p>
				</div>
				<div className={styles['bottom']}>
					<button onClick={toggle}>Добавить карту</button>
					<p>
						Для проверки карты будет снята минимальная сумма в размере 1$. Сумма
						будет возвращена вам в течение 48 часов
					</p>
				</div>
			</div>
			<AddCardForm open={open} onClose={() => set(false)} />
		</>
	)
}

export default AddCardBlock

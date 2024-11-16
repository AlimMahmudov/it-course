'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import Animate from '../animate/Animate'
import styles from './ConfirmModal.module.scss'

type TProps = {
	confirm_callback(): void
	text: string
	onClose(): void
	error: any
}

const ConfirmModal: React.FC<TProps> = ({
	confirm_callback,
	text,
	onClose,
	error
}) => {
	if (typeof window === 'undefined') return <></>
	return createPortal(
		<div className={styles.confirm_modal}>
			<Animate className={styles['content']}>
				<p>{text}</p>
				<div className={styles['actions']}>
					<button
						type='button'
						onClick={confirm_callback}
						className={styles.confirm}
					>
						Да
					</button>
					<button type='button' onClick={onClose} className={styles.cancel}>
						Нет
					</button>
				</div>
				{error && (
					<p className={styles.error}>
						{' '}
						<></>
					</p>
				)}
			</Animate>
		</div>,
		document.body
	)
}

export default ConfirmModal

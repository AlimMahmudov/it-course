import React from 'react'
import styles from './OutcomeMessage.module.scss'
import { Popup } from '../popup/Popup'
import Link from 'next/link'
type TProps = {
	title: string
	description: string
	redirect_url: string
	label: string
	open: boolean
	onClose():void
}
const OutcomeMessage: React.FC<TProps> = props => {
	return (
		<Popup
			blur_bg
			className={styles.popup}
			open={props.open}
			onClose={props.onClose}
		>
			<div className={styles.popup_content}>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<Link href={props.redirect_url}>{props.label}</Link>
			</div>
		</Popup>
	)
}

export default OutcomeMessage

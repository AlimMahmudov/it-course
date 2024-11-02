import React from 'react'
interface IAfterPurchaseProps {
	course: {
		id: string
		title: string
		description: string
		isBy: boolean
	}
}
const AfterPurchase: React.FC<IAfterPurchaseProps> = () => {
	return <div>AfterPurchase</div>
}

export default AfterPurchase

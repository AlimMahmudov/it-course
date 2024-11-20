import React from 'react'
import Image from 'next/image'
import logo from '@/shared/assets/logo.svg'
const Preloader: React.FC = () => {
	return (
		<div className={'centered-container full'}>
			<Image
				src={logo}
				alt='Logo'
				width={200}
				height={200}
				style={{ marginLeft: 20 }}
			/>
		</div>
	)
}

export default Preloader

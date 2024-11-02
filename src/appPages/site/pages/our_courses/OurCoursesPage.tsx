import React from 'react'
import styles from './OurCoursesPage.module.scss'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
const breadcrumbs = [
	{
		label: 'Главная',
		href: '/'
	},
	{
		label: 'Наши курсы',
		href: '#'
	}
]
const OurCoursesPage: React.FC = () => {
	return (
		<div className={styles.our_courses}>
			<Breadcrumbs items={breadcrumbs} />
		</div>
	)
}

export default OurCoursesPage

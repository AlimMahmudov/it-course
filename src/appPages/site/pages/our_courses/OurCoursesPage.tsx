import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import Courses from '@/shared/components/courses/Courses'
import React from 'react'
import styles from './OurCoursesPage.module.scss'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Наши курсы', href: '#this' }
]
const OurCoursesPage: React.FC = () => {
	return (
		<div className={styles.our_courses}>
			<Breadcrumbs items={breadcrumbs} />
			<div className={`container ${styles.container}`}>
				<h4>Курсы</h4>
				<Courses />
			</div>
		</div>
	)
}

export default OurCoursesPage

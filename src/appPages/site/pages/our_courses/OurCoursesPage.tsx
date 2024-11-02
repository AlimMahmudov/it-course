import React from 'react'
import styles from './OurCoursesPage.module.scss'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import Courses from '@/shared/components/courses/Courses'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Наши курсы', href: '#' }
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

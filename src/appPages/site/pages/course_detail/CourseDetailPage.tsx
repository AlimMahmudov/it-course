'use client'
import { courses } from '@/shared/const/courses'
import { useParams } from 'next/navigation'
import React from 'react'
import BeforePurchase from './components/before_purchase/BeforePurchase'
import AfterPurchase from './components/after_purchase/AfterPurchase'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'

const CourseDetailPage: React.FC = () => {
	const { courseId } = useParams()
	const findCourse = courses.find(course => course.id === courseId)
	if (!findCourse) {
		return <div>Курс не найден</div>
	}
	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Наши курсы', href: '/our_courses' },
		{ label: findCourse.title, href: '#' }
	]
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			{findCourse.isBy ? (
				<AfterPurchase course={findCourse} />
			) : (
				<BeforePurchase course={findCourse} />
			)}
		</>
	)
}

export default CourseDetailPage

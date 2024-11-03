'use client'
import { courses } from '@/shared/const/courses'
import { useParams } from 'next/navigation'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const BeforePurchase = dynamic(
	() => import('./components/before_purchase/BeforePurchase'),
	{ ssr: false }
)
const AfterPurchase = dynamic(
	() => import('./components/after_purchase/AfterPurchase'),
	{ ssr: false }
)
const Breadcrumbs = dynamic(
	() => import('@/shared/ui/breadcrumbs/Breadcrumbs'),
	{ ssr: false }
)

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
			<Suspense fallback={<div>Загрузка данных...</div>}>
				<Breadcrumbs items={breadcrumbs} />
				{findCourse.isBy ? (
					<AfterPurchase course={findCourse} />
				) : (
					<BeforePurchase course={findCourse as ICourse} />
				)}
			</Suspense>
		</>
	)
}

export default CourseDetailPage

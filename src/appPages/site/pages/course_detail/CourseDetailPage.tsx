'use client'
import { courses } from '@/shared/const/courses'
import { useParams } from 'next/navigation'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useGetUserAuthQuery } from '@/shared/redux/api/auth'
import AfterPurchase from './components/after_purchase/AfterPurchase'
import BeforePurchase from './components/before_purchase/BeforePurchase'

const Breadcrumbs = dynamic(
	() => import('@/shared/ui/breadcrumbs/Breadcrumbs'),
	{ ssr: false }
)

const CourseDetailPage: React.FC = () => {
	const { courseId } = useParams()
	const findCourse = courses.find((course) => course.id === courseId)
	const { status } = useGetUserAuthQuery()
	if (!findCourse) {
		return <div>Курс не найден</div>
	}
	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Наши курсы', href: '/our_courses' },
		{ label: findCourse.title, href: '#' }
	]
	const isSuccess = status === 'fulfilled'

	return (
		<>
			<Suspense fallback={<div>Загрузка данных...</div>}>
				<Breadcrumbs items={breadcrumbs} />
				{findCourse.isBy && isSuccess ? (
					<AfterPurchase course={findCourse} />
				) : (
					<BeforePurchase course={findCourse as ICourse} />
				)}
			</Suspense>
		</>
	)
}

export default CourseDetailPage

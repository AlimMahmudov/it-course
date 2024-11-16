'use client'
import { useGetCourseByIdQuery } from '@/shared/redux/api/courses'
import { useGetMyPurchasesQuery } from '@/shared/redux/api/user'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import AfterPurchase from './components/after_purchase/AfterPurchase'
import BeforePurchase from './components/before_purchase/BeforePurchase'

const Breadcrumbs = dynamic(
	() => import('@/shared/components/breadcrumbs/Breadcrumbs'),
	{ ssr: false }
)

const CourseDetailPage: React.FC = () => {
	const { courseId } = useParams()
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])
	const { data: findCourse, isLoading } = useGetCourseByIdQuery({
		course_id: String(courseId)
	})
	const { data } = useGetMyPurchasesQuery('courses')
	console.log(data)

	const isPurchased = data?.find(v => v.course_id == courseId)
	const purchased_course = data?.find(v => v.course_id == findCourse?.id)

	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Наши курсы', href: '/our_courses' },
		{ label: String(findCourse?.title), href: '#this' }
	]

	if (isLoading) return <span>Загрузка...</span>
	if (!findCourse) {
		return <div>Курс не найден</div>
	}
	return (
		<>
			<Suspense fallback={<div>Загрузка данных...</div>}>
				<Breadcrumbs items={breadcrumbs} />
				{isPurchased && state?.data ? (
					<AfterPurchase
						purchased_course={purchased_course}
						course={findCourse}
					/>
				) : (
					<BeforePurchase course={findCourse} />
				)}
			</Suspense>
		</>
	)
}

export default CourseDetailPage

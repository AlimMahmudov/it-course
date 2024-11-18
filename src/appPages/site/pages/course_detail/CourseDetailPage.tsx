'use client'
import { useGetCourseByIdQuery } from '@/shared/redux/api/courses'
import { useGetMyPurchasesQuery } from '@/shared/redux/api/user'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import React from 'react'
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
	const { data, isLoading: pLoading } = useGetMyPurchasesQuery('courses')

	const isPurchased = data?.find(v => v.course_id == courseId)

	if (isLoading || pLoading) {
		return (
			<div className='centered-container none'>
				<span className='loader v2'></span>
			</div>
		)
	}

	if (!findCourse) {
		return <div>Курс не найден</div>
	}

	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Наши курсы', href: '/our_courses' },
		{ label: String(findCourse?.title), href: '#this' }
	]

	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			{isPurchased && state?.data ? (
				<AfterPurchase course={findCourse} />
			) : (
				<BeforePurchase course={findCourse} />
			)}
		</>
	)
}

export default CourseDetailPage

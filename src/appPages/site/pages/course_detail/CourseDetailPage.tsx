'use client'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import { useSelector } from 'react-redux'
import AfterPurchase from './components/after_purchase/AfterPurchase'
import BeforePurchase from './components/before_purchase/BeforePurchase'
import { useGetCourseByIdQuery } from '@/shared/redux/api/courses'
import { useGetMyPurchasesQuery } from '@/shared/redux/api/user'

const Breadcrumbs = dynamic(
	() => import('@/shared/ui/breadcrumbs/Breadcrumbs'),
	{ ssr: false }
)

const CourseDetailPage: React.FC = () => {
	const { courseId } = useParams()
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])
	const { data: findCourse } = useGetCourseByIdQuery({
		course_id: String(courseId)
	})
	const { data } = useGetMyPurchasesQuery('courses')

	if (!findCourse) {
		return <div>Курс не найден</div>
	}

	const isPurchased = data?.find(v => v.id == courseId)
	const purchased_course = data?.find(v => v.id == findCourse?.id)

	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Наши курсы', href: '/our_courses' },
		{ label: findCourse.title, href: '#this' }
	]

	return (
		<>
			<Suspense fallback={<div>Загрузка данных...</div>}>
				<Breadcrumbs items={breadcrumbs} />
				{isPurchased && state.data ? (
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

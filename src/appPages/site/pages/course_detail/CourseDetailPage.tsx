'use client'
import { courses } from '@/shared/const/courses'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import { useSelector } from 'react-redux'
import AfterPurchase from './components/after_purchase/AfterPurchase'
import BeforePurchase from './components/before_purchase/BeforePurchase'

const Breadcrumbs = dynamic(
	() => import('@/shared/ui/breadcrumbs/Breadcrumbs'),
	{ ssr: false }
)

const CourseDetailPage: React.FC = () => {
	const { courseId } = useParams()
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])
	const findCourse = courses.find(course => course.id === courseId)
	const [user] = useState<UserTypes.User | null>(null)

	const isPurchased = user?.purchased_courses.find(v => v.id == courseId)
	const purchased_course = user?.purchased_courses.find(
		v => v.id == findCourse?.id
	)

	if (!findCourse) {
		return <div>Курс не найден</div>
	}
	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Наши курсы', href: '/our_courses' },
		{ label: findCourse.title, href: '#this' }
	]

	return (
		<>
			<Suspense fallback={<div>Загрузка данных...</div>}>
				<Breadcrumbs items={breadcrumbs} />
				{isPurchased && user ? (
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

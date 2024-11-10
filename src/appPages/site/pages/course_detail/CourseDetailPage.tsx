'use client'
import { courses } from '@/shared/const/courses'
import { useParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import AfterPurchase from './components/after_purchase/AfterPurchase'
import BeforePurchase from './components/before_purchase/BeforePurchase'

const Breadcrumbs = dynamic(
	() => import('@/shared/ui/breadcrumbs/Breadcrumbs'),
	{ ssr: false }
)

const CourseDetailPage: React.FC = () => {
	const { courseId } = useParams()
	const findCourse = courses.find(course => course.id === courseId)

	// const user: IUser = {
	// 	purchased_courses: [
	// 		{
	// 			id: 'cm300nsmq000008i57sntds1o',
	// 			materials: {
	// 				completeds: ['material-1', 'material-2', 'material-3', 'material-4']
	// 			},
	// 			modules: {
	// 				completeds: []
	// 			}
	// 		}
	// 	]
	// }
	const [user] = useState<IUser | null>(null)

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
		{ label: findCourse.title, href: '#' }
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

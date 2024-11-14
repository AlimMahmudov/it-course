'use client'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Register from './sections/register/Register'
import { useGetCourseByIdQuery } from '@/shared/redux/api/courses'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Зарегистрироваться на курс', href: '#this' }
]
const CourseRegisterPage: React.FC = () => {
	const searchParams = useSearchParams()
	const course_id = searchParams.get('course_id')
	const { data: findCourse } = useGetCourseByIdQuery({
		course_id: String(course_id)
	})
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<Register course={findCourse} />
		</>
	)
}

export default CourseRegisterPage

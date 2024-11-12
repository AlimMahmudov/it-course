'use client'
import { courses } from '@/shared/const/courses'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Register from './sections/register/Register'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Зарегистрироваться на курс', href: '#this' }
]
const CourseRegisterPage: React.FC = () => {
	const searchParams = useSearchParams()
	const course_id = searchParams.get('course_id')
	const findCourse = courses.find(v => v.id === course_id)

	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<Register course={findCourse} />
		</>
	)
}

export default CourseRegisterPage

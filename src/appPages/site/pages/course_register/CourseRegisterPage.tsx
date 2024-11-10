'use client'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import React from 'react'
import Register from './sections/register/Register'
import { courses } from '@/shared/const/courses'
import { useSearchParams } from 'next/navigation'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Зарегистрироваться на курс', href: '#' }
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

'use client'
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import { useGetCourseByIdQuery } from '@/shared/redux/api/courses'
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
	const {
		data: course,
		isLoading,
		isError
	} = useGetCourseByIdQuery({
		course_id: String(course_id)
	})
	return isLoading ? (
		<div className='centered-container none'>
			<span className='loader v2'></span>
		</div>
	) : isError || !course ? (
		<span>Данные отсутствуют или произошла ошибка.</span>
	) : (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<Register course={course} />
		</>
	)
}

export default CourseRegisterPage

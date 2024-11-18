'use client'
import { useGetProgressQuery } from '@/shared/redux/api/user'
import React, { useCallback, useState } from 'react'
import CourseComments from '../../sections/course_comments/CourseComments'
import CourseInfo from '../../sections/course_info/CourseInfo'
import CourseMaterials from '../../sections/course_materials/CourseMaterials'
import { useLocalStorage } from 'usehooks-ts'
interface IAfterPurchaseProps {
	course: CoursesTypes.Course
}
const AfterPurchase: React.FC<IAfterPurchaseProps> = ({ course }) => {
	const { data, isError, isLoading } = useGetProgressQuery({
		type: 'course',
		course_id: course.id
	})
	const [active, setActive] = useLocalStorage('active', {
		module: '',
		material: ''
	})
	const toggleModule = useCallback(
		(key: keyof typeof active, id: string) => {
			setActive(p => ({
				...p,
				[key]: id
			}))
		},
		[setActive]
	)

	return isLoading ? (
		<div className='centered-container none'>
			<span className='loader v2'></span>
		</div>
	) : isError || !data ? (
		<span>Данные отсутствуют или произошла ошибка.</span>
	) : (
		<>
			<CourseInfo purchased_course={data} isBy={true} course={course} />
			<CourseMaterials
				toggleModule={toggleModule}
				active={active}
				purchased_course={data}
				course={course}
			/>
			<CourseComments material_id={active.material} />
		</>
	)
}

export default AfterPurchase

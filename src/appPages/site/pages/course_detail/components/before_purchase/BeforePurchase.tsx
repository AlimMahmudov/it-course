import React from 'react'
import CourseInfo from '../../sections/course_info/CourseInfo'
import CourseAbout from '../../sections/course_about/CourseAbout'
import CourseProgram from '../../sections/course_program/CourseProgram'
interface IBeforePurchaseProps {
	course: ICourse
}
const BeforePurchase: React.FC<IBeforePurchaseProps> = ({ course }) => {
	return (
		<>
			<CourseInfo course={course} />
			<CourseAbout course={course} />
			<CourseProgram course={course} />
		</>
	)
}

export default BeforePurchase

import React from 'react'
import CourseInfo from '../../sections/course_info/CourseInfo'
import CourseMaterials from '../../sections/course_materials/CourseMaterials'
interface IAfterPurchaseProps {
	course: CoursesTypes.Course
	purchased_course: IPuschasedCourse | undefined
}
const AfterPurchase: React.FC<IAfterPurchaseProps> = ({
	course,
	purchased_course
}) => {
	return (
		<>
			<CourseInfo
				purchased_course={purchased_course}
				isBy={true}
				course={course}
			/>
			<CourseMaterials
				purchased_course={purchased_course}
				course={course}
			/>
		</>
	)
}

export default AfterPurchase

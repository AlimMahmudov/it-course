import React from 'react'
import CourseInfo from '../../sections/course_info/CourseInfo'
import CourseAbout from '../../sections/course_about/CourseAbout'
import CourseProgram from '../../sections/course_program/CourseProgram'
import CourseFeatures from '../../sections/course_features/CourseFeatures'
import CourseLP from '../../sections/course_lp/CourseLP'
import CourseReviews from '../../sections/course_reviews/CourseReviews'
import CourseFAQ from '../../sections/course_faq/CourseFAQ'
interface IBeforePurchaseProps {
	course: CoursesTypes.Course
}
const BeforePurchase: React.FC<IBeforePurchaseProps> = ({ course }) => {
	console.log(course);
	
	return (
		<>
			<CourseInfo course={course} />
			<CourseAbout course={course} />
			<CourseProgram course={course} />
			<CourseFeatures course={course} />
			<CourseLP course={course} />
			<CourseReviews course={course} />
			<CourseFAQ />
		</>
	)
}

export default BeforePurchase

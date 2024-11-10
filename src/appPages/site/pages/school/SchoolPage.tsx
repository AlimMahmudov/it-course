import React from "react";
import School from "./sections/aboutSchool/School";
import Telegram from "../home/sections/telegram/Telegram";
import Pack from "./sections/pack/Pack";
import Review from "./sections/review/Review";
import Master from "./sections/master/Master";
import Courses from "./sections/courses/Courses";
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'О школе', href: '#' }
]
const SchoolPage = () => {
  return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<School />
			<Courses />
			<Master />
			<Pack />
			<Review />
			<Telegram />
		</>
	)
};

export default SchoolPage;

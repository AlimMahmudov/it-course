import Breadcrumbs from "@/shared/components/breadcrumbs/Breadcrumbs";
import Telegram from "../home/sections/telegram/Telegram";
import School from "./sections/aboutSchool/School";
import Master from "./sections/master/Master";
import Pack from "./sections/pack/Pack";
import Review from "./sections/review/Review";
import Courses from "./sections/courses/Courses";
const breadcrumbs = [
  { label: "Главная", href: "/" },
  { label: "О школе", href: "#this" },
];
const SchoolPage = () => {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <School />
      <Courses />
      <Master />
      <Pack />
      {/* <Review /> */}
      {/* <Telegram /> */}
    </>
  );
};

export default SchoolPage;

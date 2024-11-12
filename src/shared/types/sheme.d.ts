// interface User {}

interface User {
  id: number;
  email: string;
  password: string;
}

interface IChildren {
  children: React.ReactNode;
}

interface ICourse {
  id: string;
  title: string;
  description: string;
  description2: string;
  access: string;
  price: number;
  duration: {
    modules: number;
    materials: number;
  };
  course_about: {
    descriptions: string[];
    this_for: string;
    learning: string[];
  };
  results: {
    descriptions: string[];
    outcomes: string;
  };
  program: {
    modules: IModule[];
  };
  master_class_leader: {
    name: string;
    title: string;
  };
}
interface IModule {
  name: string;
  materials: {
    video_url: string;
    title: string;
    id: string;
  }[];
}

interface IUser {
  purchased_courses: IPuschasedCourse[];
}

interface IPuschasedCourse {
  id: string;
  materials: {
    completeds: string[];
  };
  modules: {
    completeds: string[];
  };
}
interface IArticles {
  id: number;
  isSubscribe: boolean;
  mainArticles: {
    image: string;
    description: string;
    data: string;
  };
  article_content: {
    title: string;
    description: string;
    image: string | StaticImageData;
    article_subtitle: string;
    faq: Array<string>;
    description_after_subscribe: {
      first: string;
      second: string;
      third: string;
      four: string;
    };
    fuck_after_subscribe: Array<string>;
  };
}

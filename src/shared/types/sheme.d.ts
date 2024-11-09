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
  isBy: boolean;
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
    modules: string[];
  };
  master_class_leader: {
    name: string;
    title: string;
  };
  student_reviews: {
    name: string;
    review: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
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

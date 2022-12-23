export enum TopLevelCategoty {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  firstCategory: TopLevelCategoty;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    siniorSalary: number;
  };
  advanteges: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}

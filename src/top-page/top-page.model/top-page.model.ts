import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Prop } from '@typegoose/typegoose/lib/prop';

export enum TopLevelCategoty {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @Prop()
  count: number;
  @Prop()
  juniorSalary: number;
  @Prop()
  middleSalary: number;
  @Prop()
  siniorSalary: number;
}

export class TopPageAdvantage {
  @Prop()
  title: string;
  @Prop()
  description: string;
}
export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {

  @Prop({enum: TopLevelCategoty})
  @Prop()
  firstCategory: TopLevelCategoty;
  secondCategory: string;
  @Prop({unique: true})
  alisas:string;
  @Prop()
  // title: string;
  @Prop()
  category: string;
  @Prop({type: () =>   HhData})
  hh?: HhData
  @Prop({type: () => [TopPageAdvantage]})
  advanteges: TopPageAdvantage[];
  @Prop()
  seoText: string;
  @Prop()
  tagsTitle: string;
  @Prop({type: () => [String]})
  tags: string[];
}

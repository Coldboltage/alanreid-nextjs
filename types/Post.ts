export interface FrontmatterInterface {
  title: string;
  date: string;
  image: string;
  authorImage: string;
  name: string;
  category: string;
  description: string;
  micro?: boolean;
}

export interface imageSizeInterface {
  width: number;
  height: number;
}

export interface StatsInterface {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export interface DataInterface {
  slug: string;
  content?: string;
  stats: StatsInterface;
  listPage?: boolean;
  imageSize: imageSizeInterface;
  frontmatter: FrontmatterInterface;
}

export interface PostItemInterface {
  slug: string;
  content?: string;
  stats: StatsInterface;
  listPage?: boolean;
  imageSize: imageSizeInterface;
  frontmatter: FrontmatterInterface;
  index: number;
}

export interface BlogHeroInterface {
  categories?: string[];
  name: string;
}

export interface BooksInterface {
  title: string;
  subtitle: string;
}

export interface SocialsInterface {
  twitter?: string;
  linkedin?: string;
  github?: string;
  homepage?: string;
}

export interface DeveloperSocials {
  socials: SocialsInterface;
}

export interface InfoCardInterface {
  image: string;
  name: string;
  title: string;
  description: string;
  socials: SocialsInterface;
  width?: number;
  height?: number;
}

export interface ListOfPostsInterface {
  postData: PostItemInterface[];
  title?: string;
  subTitle?: string;
  showTitle?: boolean;
  stop?: boolean;
}

export interface StatsInterface {
  text: string;
}

export interface SmallMetaInterface {
  frontmatter: FrontmatterInterface;
  bigger?: boolean;
  stats: StatsInterface;
  listpage?: boolean;
}

export interface CategoryInterface {
  posts: [];
  categoryName: { categoryName: string };
}

export interface CourseInterface {
  name: string;
  title: string;
  description: string;
  socials: {
    homepage: string
  };
  image: string;
  width: number;
  height: number;
}

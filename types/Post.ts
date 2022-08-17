export interface frontmatterInterface {
  title: string,
  date: string,
  image: string,
  authorImage: string,
  name: string,
  category: string,
  description: string
}

export interface imageSizeInterface {
  width: number,
  height: number
}

export interface StatsInterface {
  text: string
}

export interface dataInterface {
  slug: string,
  content: string,
  stats: StatsInterface,
  listPage: boolean,
  imageSize: imageSizeInterface,
  frontmatter: frontmatterInterface
}

export interface PostItemInterface {
  data: dataInterface,
  index: number,
}


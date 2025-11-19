import {MongoObject} from './mongo-object';
import {CategoryProps} from './category';
import {AdsProps} from './ads';

export interface ArticleProps extends MongoObject {
  category: CategoryProps;
  content?: string;
  published_at: string;
  slug?: string;
  thumbnail: string;
  title: string;
  url?: string;
  author?: MongoObject & { name: string; avatar: string };
  images?: string[];
  score?: number;
  views?: number;
  shares?: number;
  likes?: number;
  bookmarks?: number;
}

export interface SectionArticleProps {
  category: CategoryProps;
  articles: ArticleProps[];
}

export interface DetailArticleProps {
  ads: AdsProps[],
  article: ArticleProps;
  related_articles: ArticleProps[];
}

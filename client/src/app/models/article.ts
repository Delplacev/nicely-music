import {Musique} from './musique';
import {Style} from './style';
import {Artiste} from './artiste';

export class Article {
  _id: string;
  title: string;
  teaser: string;
  body: string;
  published_at: Date;
  category: string;
  imgPost: string;
  visible: Boolean;
  upvotes: number;
  downvotes: number;

  musiques: Musique[];
  artistes: Artiste[];
  styles: Style[];

}

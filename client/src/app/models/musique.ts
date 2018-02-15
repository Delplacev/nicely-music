import {Style} from './style';
import {Artiste} from './artiste';

export class Musique {
  _id: string;
  titreMusique: string;
  titreEntier: string;
  style: string;
  datePreview: Date;
  dateRelease: Date;
  datePostMusique: Date;
  lienWidget: string;
  lienSC: string;
  nomImg: string;
  img_spotify: string;
  nom_style: string;
  upvotes: string[];
  downvotes: string[];
  spotify_id: string;
  external_urls: string[];
  preview_url: string;

  styles: Style[];

  artiste: Artiste[];
  artisteRemix: Artiste[];
  artisteFeat: Artiste[];

  artistes_spotify_id: string[];
  artisteFeat_spotify_id: string[];
  artisteRemix_spotify_id: string[];
}

import {Musique} from './Musique';

export class Artiste {
  nomArtiste: string;
  presentation: string;
  nationaliter: string;
  lienPhotoArtiste: string;
  nbMusiqueReleases: string;
  upvotes: number;
  spotify_id: string;
  lien_spotify_image: string;

  musique: Musique[];
  musiqueRemix: Musique[];
  musiqueFeat: Musique[];

}

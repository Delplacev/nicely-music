import { mongoose } from "../../config/database";
import { Document, Model, Schema } from "mongoose";
import { IMusique } from '../musiques/model';


export interface IArtiste extends Document{
    nomArtiste: string;
    presentation: string;
    nationaliter: string;
    lienPhotoArtiste: string;
    nbMusiqueReleases: string;
    upvotes: number;
    spotify_id: string;
    lien_spotify_image: string;

    musique: IMusique[];
    musiqueRemix: IMusique[];
    musiqueFeat: IMusique[];

}



export interface IArtisteModel extends Model<IArtiste> {
    updateUser(email: {}, description: string): Promise<{ nModified: number }>
    //updateByAge(ageLimit: number, text: string): Promise<{ ok: number, nModified: number, n: number }>
}

const schemaArtiste = new Schema({
    nomArtiste: String,
    presentation: String,
    nationaliter: String,
    lienPhotoArtiste: String,
    nbMusiqueReleases: String,
    upvotes: {type: Number, default: 0},
    spotify_id: String,
    lien_spotify_image: String,

    musique: [{ type: Schema.Types.ObjectId, ref: 'Musique'}],
    musiqueRemix: [{ type: Schema.Types.ObjectId, ref: 'Musique'}],
    musiqueFeat: [{ type: Schema.Types.ObjectId, ref: 'Musique'}],

    liveset: [{ type: Schema.Types.ObjectId, ref: 'Liveset'}],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}]
});

schemaArtiste.static("updateUser", (user: {}, description: string) => {

    return Artiste
        .update({
            "_id": user
        }, {
            "$set": {
                "description": description
            }
        })
        .exec();
});

/*schema.static("updateByAge", (ageLimit: number, text: string) => {

    return Author
        .where("age")
        .gte(ageLimit)
        .update({
            "$set": {
                description: text
            }
        })
        .exec();
});*/

export const Artiste = mongoose.model<IArtiste>("Artiste", schemaArtiste) as IArtisteModel;
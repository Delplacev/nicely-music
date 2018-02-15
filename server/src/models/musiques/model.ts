import { mongoose } from "../../config/database";
import { Document, Model, Schema } from "mongoose";
import { Artiste, IArtiste} from '../artistes/model';


export interface IMusique extends Document{
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

    //styles: Style[];

    artiste: IArtiste[];
    artisteRemix: IArtiste[];
    artisteFeat: IArtiste[];

    artistes_spotify_id: string[];
    artisteFeat_spotify_id: string[];
    artisteRemix_spotify_id: string[];
}


export interface IMusiqueModel extends Model<IMusique> {
    updateUser(email: {}, description: string): Promise<{ nModified: number }>
    //updateByAge(ageLimit: number, text: string): Promise<{ ok: number, nModified: number, n: number }>
}

const schemaMusique = new Schema({
    titreMusique: String,
    titreEntier: String,
    style: String,
    datePreview: Date,
    dateRelease: Date,
    datePostMusique: Date,
    lienWidget: String,
    lienSC: String,
    nomImg: String,
    img_spotify: String,
    nom_style: String,
    upvotes: [{ip: String}],
    downvotes: [{ip: String, count: Number}],
    spotify_id: String,
    external_urls: [],
    preview_url: String,

    styles: [{type: Schema.Types.ObjectId, ref: 'Style'}],

    artiste: [{type: Schema.Types.ObjectId, ref: 'Artiste'}],
    artisteRemix: [{type: Schema.Types.ObjectId, ref: 'Artiste'}],
    artisteFeat: [{type: Schema.Types.ObjectId, ref: 'Artiste'}],

    artistes_spotify_id: [{type: String}],
    artisteFeat_spotify_id: [{type: String}],
    artisteRemix_spotify_id: [{type: String}]
});

schemaMusique.static("updateUser", (user: {}, description: string) => {

    return Musique
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

export const Musique = mongoose.model<IMusique>("Musique", schemaMusique) as IMusiqueModel;




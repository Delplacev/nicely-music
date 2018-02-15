import { mongoose } from "../../config/database";
import { Document, Model, Schema } from "mongoose";
import { Artiste, IArtiste} from '../artistes/model';
import {IMusique} from '../musiques/model';


export interface IStyle extends Document{
    idMusique: Number;
    nomStyle: String;
    musiques: IMusique[];
}


export interface IStyleModel extends Model<IStyle> {
    updateUser(email: {}, description: string): Promise<{ nModified: number }>
    //updateByAge(ageLimit: number, text: string): Promise<{ ok: number, nModified: number, n: number }>
}

const schemaStyle = new Schema({
    idMusique: Number,
    nomStyle: String,
    musiques: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musique' }]
});

schemaStyle.static("updateUser", (user: {}, description: string) => {

    return Style
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

export const Style = mongoose.model<IStyle>("Style", schemaStyle) as IStyleModel;




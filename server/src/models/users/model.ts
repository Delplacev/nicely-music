import { mongoose } from "../../config/database";
import { Document, Model, Schema } from "mongoose";
import {ITokenUser} from '../../interfaces';

export interface IUser extends Document, ITokenUser {
    email: string;
    firstName?: string;
    lastName?: string;
    displayName: string;
    role?: string;
    picture?: string;
    bitbucket?: string;
    facebook?: string;
    foursquare?: string;
    google?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    live?: string;
    yahoo?: string;
    twitter?: string;
    twitch?: string;
    spotify?: string;
    hash?;
}

export interface IUserModel extends Model<IUser> {
    updateUser(email: {}, description: string): Promise<{ nModified: number }>
    //updateByAge(ageLimit: number, text: string): Promise<{ ok: number, nModified: number, n: number }>
}

const schema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, select: false },
    role_nicely: { type: String, lowercase: true},
    displayName: String,
    role: String,
    picture: String,
    bitbucket: String,
    facebook: String,
    foursquare: String,
    google: String,
    github: String,
    instagram: String,
    linkedin: String,
    live: String,
    yahoo: String,
    twitter: String,
    twitch: String,
    spotify: String,
    hash: String
});

schema.static("updateUser", (user: {}, description: string) => {

    return User
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

export const User = mongoose.model<IUser>("User", schema) as IUserModel;
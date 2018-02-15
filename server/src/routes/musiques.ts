import * as express from 'express';
import { Request, Response } from 'express';

import {Musique} from '../models/models';


export const musiqueRoutes = express.Router()
    .get('/all', allMusique)



export async function allMusique(request: Request, response: Response) {

    try {
        const musiques = await Musique.find().populate('artiste artisteRemix artisteFeat styles', '-presentation -musiques').sort( { 'dateRelease': -1 } ).exec()
        console.log(musiques)
        return response.json(musiques);
    } catch (err) {
        console.log(err)
        return response.sendStatus(500);
    }
}


import { Request, Response, NextFunction, RequestHandler } from 'express';
import Film from '../../../models/film';
import Genre from '../../../models/genre';
import { ErrorException } from '../../interfaces/events';

export const createFilm = async (req: Express.Multer.File & Request, res: Response, next: NextFunction) => { 
    const filmData = req.body;
    if (!req.file) {
        console.log(req, 'it is a request');
        
        const error: ErrorException = new Error('No image provided.');
        error.statusCode = 422;
        throw error;
    }
    console.log(req.file);
    
    const imageUrl: string = req.file.path;
    console.log(imageUrl);
    
    const film = await Film.create({
        name: filmData.name,
        ageRestriction: filmData.ageRestriction,
        posterUrl: imageUrl,
        startDate: filmData.startDate,
        endDate: filmData.endDate
    });
    console.log(film);
    res.status(201).json({ message: 'Film added.', createdFilm: film });
}

export const getGenre: RequestHandler = async (req, res, next) => {
    const genres = await Genre.findAll();
    res.status(200).json({ genres })
}
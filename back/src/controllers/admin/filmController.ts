import { RequestHandler } from 'express';
import Film from '../../../models/film';

export const createFilm: RequestHandler = async (req, res, next) => { 
    const filmData = req.body;
    const film = await Film.create({
        name: filmData.name,
        ageRestriction: filmData.ageRestriction,
        posterUrl: filmData.posterUrl,
        startDate: filmData.startDate,
        endDate: filmData.endDate
    });
    console.log(film);
    res.status(201).json({ message: 'Created the todo.', createdFilm: film });
}
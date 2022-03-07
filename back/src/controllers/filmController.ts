import { RequestHandler } from "express";
import Film from '../../models/film';
export const getFilms: RequestHandler = async (req, res, next) => {
    const films = await Film.findAll();
    res.status(200).json({ films })
}
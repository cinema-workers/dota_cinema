import { Router } from 'express';
import { createFilm } from '../../controllers/admin/filmController';

const adminFilms = Router();

export const filmCreation = adminFilms.post('/film', createFilm);
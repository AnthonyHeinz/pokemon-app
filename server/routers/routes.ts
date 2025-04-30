import { Router } from 'express';
import { Request, Response } from 'express';
import pokemonController from '../controllers/pokemonController';

const router = Router();

router.get(
  '/pokemon/:name',
  pokemonController.getPokemon,
  (req: Request, res: Response) => {
    res.status(200).send(res.locals.pokemonData);
  }
);

export default router;

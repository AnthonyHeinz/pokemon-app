import { Request, Response, NextFunction } from 'express';

type Controller = {
  getPokemon: (req: Request, res: Response, next: NextFunction) => void;
};

const pokemonController: Controller = {
  getPokemon: async (req, res, next) => {
    const { name } = req.params;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json()
    res.locals.pokemonData = data
    return next();
  },
};

export default pokemonController;

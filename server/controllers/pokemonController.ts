import { Request, Response, NextFunction } from 'express';

type Controller = {
  getPokemon: (req: Request, res: Response, next: NextFunction) => void;
};

const pokemonController: Controller = {
  getPokemon: async (req, res, next) => {
    try {
      const { name } = req.params;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      res.locals.pokemonData = data;
      return next();
    } catch (error : any) {
      console.error('An error occurred:', error.message);
    }
  },
};

export default pokemonController;

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { ReactEventHandler } from 'react';

import { Game } from '../../core/_models/Game';

import './GameCard.scss';

interface IGameCard {
  handleClick: ReactEventHandler;
  game: Game;
}

export const GameCard = ({ handleClick, game }: IGameCard) => {
  return (
    <Card className="game-card" onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={game.icon}
          alt="Game icon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

import { useHistory } from "react-router";

// Core
import { Game } from "../../core/_models/Game";

// Redux
import { selectorGetFilteredGames } from "../../store/games/selectors";
import { useAppSelector } from "../../store/hooks";

import { GameCard } from "../GameCard";

import './Games.scss';

export const Games = () => {
  const history = useHistory();
  const games = useAppSelector(selectorGetFilteredGames);

  const handleClick = (code: string) => {
    history.push(`/game/${code}`)
  }

  return (
    <div className="games">
      {games.map((game: Game) => (
        <GameCard
          key={game.code}
          game={game}
          handleClick={() => handleClick(game.code)}
        />
      ))}
    </div>
  );
};

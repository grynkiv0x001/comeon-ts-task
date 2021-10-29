import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { Game } from "../../core/_models/Game";
import { selectorGetGames } from "../../store/games/selectors";
import { useAppSelector } from "../../store/hooks";

export const Games = () => {
  const history = useHistory();
  const games = useAppSelector(selectorGetGames);

  console.log(games);

  const handleClick = (code: string) => {
    history.push(`/game/${code}`)
  }

  return (
    <div>
      <ul>
        {games.map((game: Game) => (
          <Button key={game.code} onClick={() => handleClick(game.code)}>{game.name}</Button>
        ))}
      </ul>
    </div>
  );
};

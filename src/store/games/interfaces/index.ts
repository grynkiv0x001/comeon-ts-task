import { Game } from "../../../core/_models/Game";
import { Category } from "../../../core/_models/Category";

export interface IGamesReducer {
  games: Game[];
  filteredGames: Game[];
  categories: Category[];
  category: number;
}

import { Button } from "@mui/material";

import { Category } from "../../core/_models/Category";
import { filterByCategory } from "../../store/games/reducer";
import { selectorCategories } from "../../store/games/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import './Categories.scss';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectorCategories);

  const handleClick = (id: number) => {
    dispatch(filterByCategory(id));
  };

  return (
    <div className="filters-container">
      <p className="filters-container__label">Filters: </p>
      <ul className="filters">
        {categories.map((category: Category) => (
          <p key={category.id} onClick={() => handleClick(category.id)} className="filters__item">{category.name}</p>
        ))}
      </ul>
    </div>
  );
};

import { Button } from "@mui/material";

import { Category } from "../../core/_models/Category";
import { filterByCategory } from "../../store/games/reducer";
import { selectorCategories, selectorCurrentCategory } from "../../store/games/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Categories = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectorCurrentCategory);
  const categories = useAppSelector(selectorCategories);

  const handleClick = (id: number) => {
    dispatch(filterByCategory(id));
  };

  return (
    <div>
      <ul>
        {categories.map((category: Category) => (
          <Button key={category.id} onClick={() => handleClick(category.id)}>{category.name}</Button>
        ))}
      </ul>
    </div>
  );
};

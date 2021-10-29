import { selectorCategories } from "../../store/games/selectors";
import { useAppSelector } from "../../store/hooks";

export const Categories = () => {
  const categories = useAppSelector(selectorCategories);

  console.log('Categories: ', categories);

  return (
    <p>Categories</p>
  );
};
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";
import { Button } from "@mui/material";

// Core
import { ROUTES } from "../../core/constants/routes";

// Redux
import { getCategories, getGames } from "../../store/games/actions";
import { filterBySearch } from "../../store/games/reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/user/actions";
import { selectorGetUser } from "../../store/user/selectors";

// Components
import { Games } from "../Games";
import { Categories } from "../Categories";
import { SearchField } from "../../shared/components/SearchField";

export const HomePage = () => {
  const history = useHistory();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectorGetUser);
	const [cookie, setCookie, removeCookie] = useCookies(['user']);

  // Check if user is logged in
  useEffect(() => {
    if (!cookie?.user) {
      toast.warn('Sign up first!');
      history.push(ROUTES.LOGIN);
    }
  }, []);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(filterBySearch(event.target.value));
	};

	const handleLogout = async () => {
		await dispatch(logout({ username: user.username })).unwrap();

		removeCookie('user');

    toast.success('You are successfully logged out!');
		history.push(ROUTES.LOGIN);
	};
  
	useEffect(() => {
		dispatch(getGames());
		dispatch(getCategories());
	}, []);

  return (
    <div className="home">
			<div className="home__header">
        {user && (
          <div className="user">
            <div className="user__avatar">
              <img src={user.avatar} alt="avatar" />
            </div>
            <div className="user__info">
              <p className="user__info-name">{user.name}</p>
              <p className="user__info-event">{user.event}</p>
            </div>
            <SearchField handleChange={handleSearch} />
            <div className="home__header-logout">
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        )}
			</div>
			<div className="home__body">
        <Categories />
        <Games />
			</div>
		</div>
  )
};

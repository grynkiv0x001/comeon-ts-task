import { AppBar, Button, debounce, Icon, IconButton, Toolbar } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../core/constants/routes";
import { getCategories, getGames } from "../../store/games/actions";
import { filterBySearch } from "../../store/games/reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/user/actions";
import { selectorGetUser } from "../../store/user/selectors";
import { useCookies } from 'react-cookie';
import { Box } from "@mui/system";

export const HomePage = () => {
  const history = useHistory();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectorGetUser);
	const [cookie, setCookie, removeCookie] = useCookies(['user']);

  // Check if user is logged in
  useEffect(() => {
    if (!cookie?.user) {
      history.push(ROUTES.LOGIN);
    }
  }, []);

	const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(filterBySearch(event.target.value));
	};

	const debouncedChangeHandler = useMemo(() => debounce(handleChangeSearch, 500), [history, user]);

	const handleLogout = async () => {
		await dispatch(logout({ username: user.username })).unwrap();

		removeCookie('user');

		history.push(ROUTES.LOGIN);
	};
  
	useEffect(() => {
		dispatch(getGames());
		dispatch(getCategories());

    console.log();
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
            <div className="home__header-logout">
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        )}
			</div>

			<div className="home__content">
				<div className="home__content__body">
				</div>
			</div>
		</div>
  )
};

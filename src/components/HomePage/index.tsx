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

// Styles
import './HomePage.scss';

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
    <>
      {user && (
        <div className="home">
          <div className="home__header">
              <div className="user">
                <div className="user__info">
                  <div className="user__info-avatar">
                    <img src={user.avatar} alt="avatar" className="user__info-avatar-img" />
                  </div>
                  <p className="user__info-name">{user.name}</p>
                </div>
                <div className="user__info-logout">
                  <Button onClick={handleLogout} variant="contained">Logout</Button>
                </div>
              </div>
            </div>
            <div className="home__body">
              <h2 className="home__body-welcome">Welcome back! {user.event}</h2>
              <Categories />
              <SearchField handleChange={handleSearch} />
              <Games />
            </div>
        </div>
      )}
    </>
  )
};

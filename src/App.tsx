import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useCookies } from 'react-cookie';

// Core
import { ROUTES } from './core/constants/routes';

// Redux
import { useAppDispatch } from './store/hooks';
import { updateUser } from './store/user/reducer';

// Components
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { InvalidPage } from './components/InvalidPage';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(['user']);

  useEffect(() => {
		if (cookies?.user) {
			dispatch(updateUser(cookies?.user));
		}
	}, []);

  return (
    <div>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={LoginPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.INVALID} component={InvalidPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

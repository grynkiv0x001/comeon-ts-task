import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Core
import { ROUTES } from './core/constants/routes';

// Redux
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectorGetUser } from './store/user/selectors';

// Components
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { InvalidPage } from './components/InvalidPage';

function App() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectorGetUser);

  const isLogged = (): any => {
    return !!user || localStorage.getItem('user');
  }

  useEffect(() => {
    if (!isLogged) {
      history.push(ROUTES.LOGIN);
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

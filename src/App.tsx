import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Core
import { ROUTES } from './core/constants/routes';

// Components
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { InvalidPage } from './components/InvalidPage';

function App() {
  // TODO: Add verification if user is logged or no

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

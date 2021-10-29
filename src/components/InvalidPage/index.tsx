import { ROUTES } from "../../core/constants/routes";
import './InvalidPage.scss';

export const InvalidPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 Not Found</h1>
      <a href={ROUTES.LOGIN} className="not-found__link">Home page</a>
    </div>
  );
};

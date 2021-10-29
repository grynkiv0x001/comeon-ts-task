import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { ROUTES } from "../../core/constants/routes";

import './GamePage.scss';

const windowLocal: any = window;

export const GamePage = () => {
  const history = useHistory();
  const [cookie] = useCookies(['user']);
  const { name }: { name: string } = useParams();

  useEffect(() => {
    if (!cookie.user) {
      history.push(ROUTES.LOGIN);
    }
  }, []);

  useEffect(() => {
    if (name && windowLocal.comeon) {
      windowLocal.comeon.game.launch(name);
    }
  }, [name, windowLocal.comeon]);

  return (
    <div className="game-place">
      <div id="game-launch" />
    </div>
  );
};

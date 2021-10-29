import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { ROUTES } from "../../core/constants/routes";

import './GamePage.scss';
import { Button } from "@mui/material";

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

  const handleClick = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <>
      <Button className="button-back" onClick={handleClick} variant="contained">Go back</Button>
      <div className="game-place">
        <div id="game-launch" />
      </div>
    </>
  );
};

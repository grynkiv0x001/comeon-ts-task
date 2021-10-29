import { useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from "@mui/material";

import { ROUTES } from "../../core/constants/routes";

import './GamePage.scss';

const windowLocal: any = window;

export const GamePage = () => {
  const history = useHistory();
  const [cookie] = useCookies(['user']);
  const gameLaunch = useRef<any>(null);
  const { name }: { name: string } = useParams();
  let fullscreen = false;

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

  const handleClickBack = () => {
    history.push(ROUTES.HOME);
  };

  const handleClickFullscreen = () => {
    const current = gameLaunch?.current;
    fullscreen = !fullscreen;

    if (fullscreen) {
      current.className = 'game-launch--fullscreen';
    } else {
      current.className = '';
    }
  };

  return (
    <>
      <Button
        className="game-button game-button--back"
        variant="contained"
        onClick={handleClickBack}
      >
        Go back
      </Button>
      <Button
        className="game-button game-button--fullscreen"
        variant="contained"
        onClick={handleClickFullscreen}
      >
        Fullscreen
      </Button>
      <div className="game-place">
        <div id="game-launch" ref={gameLaunch} />
      </div>
    </>
  );
};

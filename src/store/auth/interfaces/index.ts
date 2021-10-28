import { User } from "../../../core/_models/User";
import { LOGIN_USER, LOGOUT_USER } from '../../actions-types';

interface IUserLogin {
  type: typeof LOGIN_USER;
  payload: User;
}

interface IUserLogout {
  type: typeof LOGOUT_USER;
  payload: null;
}

export type AuthActions = IUserLogin | IUserLogout;

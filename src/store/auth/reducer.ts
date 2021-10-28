import { User } from '../../core/_models/User';
import { LOGIN_USER, LOGOUT_USER } from '../actions-types';
import { AuthActions } from './interfaces';

const initialValue: { user: User | null } = {
  user: null,
};

export const authReducer = () => {
  return initialValue;
};

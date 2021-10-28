import { User } from "../../core/_models/User";
import { StoreType } from "../store";

export const selectorGetUser = (store: StoreType): any => {
  return store.userRedux.user;
};

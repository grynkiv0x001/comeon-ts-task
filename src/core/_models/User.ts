export type User = {
  username: string;
  name: string;
  avatar: string;
  event: string;
};

export interface UserLogin {
  username: string;
  password: string;
};

export interface UserLogout {
  name: string;
};

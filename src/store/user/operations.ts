import { IUserReducer } from './interfaces';

export const updateUserOperation = (_: IUserReducer, { payload }: any): IUserReducer => {
	return { user: payload };
};

export const logoutUserOperation = (): IUserReducer => {
	return { user: null };
};

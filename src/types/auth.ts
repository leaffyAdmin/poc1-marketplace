import { IBaseEntity } from './index';

export interface IUser extends IBaseEntity {
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
}

export interface IResetPasswordData {
  email: string;
  token: string;
  newPassword: string;
}

export interface IUpdateProfileData {
  name?: string;
  email?: string;
  avatar?: string;
} 
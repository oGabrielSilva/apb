import { Types } from 'mongoose';

export type TUser = {
  _id: Types.ObjectId;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  state: string;
  password?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
};

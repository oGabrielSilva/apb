/* eslint-disable no-unused-vars */
import session from 'express-session';
import { TUser } from '../types/global';

declare module 'express-session' {
  export interface SessionData {
    user: TUser;
  }
}

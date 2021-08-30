import { ICurrentUser } from '@views/Home/home.types';
import Cookies from 'js-cookie';

export const isDevelopment = () => process.env.NEXT_PUBLIC_NODE_ENV === 'development';

export const isUserLogged = () => !!Cookies.get('currentUser');
export const getLoggedUser = () => JSON.parse(Cookies.get('currentUser')) as ICurrentUser;

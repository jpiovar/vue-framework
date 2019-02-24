export const INITIAL = 'initial';
export const LOGGED_IN = 'loggedIn';
export const LOGGED_OUT = 'loggedOut'; 

export interface UserData {
    id: string;
    name: string;
    email: string;
}

export type UserStatus = 'initial'|'loggedIn'|'loggedOut';

export interface UserStore {
    userData: UserData;
    userStatus: UserStatus;
}

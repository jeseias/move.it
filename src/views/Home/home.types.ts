export interface ICurrentUser {
  login: string;
  name: string;
}

export interface IHomePageProps {
  currentUser: ICurrentUser;
}

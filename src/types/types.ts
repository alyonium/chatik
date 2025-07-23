export interface UserCredentials {
  username: string;
  password: string;
}

export type UserInfo = UserCredentials & {
  id: number;
  created_at: Date;
  token: string;
};

export type Message = {
  id?: number;
  username: string;
  created_at: string;
  content: string;
};

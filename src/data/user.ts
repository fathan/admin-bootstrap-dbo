export interface IUser {
  id: number;
  email: string;
  password: string;
}

export const userData: IUser[] = [
  {
    id: 1,
    email: 'developer@dbo.id',
    password: '12345'
  },
  {
    id: 2,
    email: 'admin@dbo.id',
    password: '12345'
  }
]
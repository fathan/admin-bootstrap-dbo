interface Cookie {
  httpOnly: boolean;
  maxAge: number;
  secure: any,
  sameSite: string;
  path: string;
}

export const cookieOptions: Cookie = {
  httpOnly: true,
  maxAge: 3600,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  path: '/',
}
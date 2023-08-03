import { serialize, parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export const setCookie = (res: NextApiResponse, name: string, value: any, options = {}) => {
  const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);

  const cookieValue = serialize(name, stringValue, options);

  res.setHeader('Set-Cookie', cookieValue);
};

export const getCookies = (req: NextApiRequest) => {
  return parse(req.headers.cookie || '');
};

export const deleteCookie = (res: NextApiResponse, name: string) => {
  const cookieValue = serialize(name, '', {
    expires: new Date(0), // Set the expiration date to the past to delete the cookie
    path: '/', // The path of the cookie should be the same as when it was created
  });

  res.setHeader('Set-Cookie', cookieValue);
};
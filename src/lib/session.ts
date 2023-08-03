import type { IronSessionOptions } from 'iron-session'
import { IUser } from "@/data/user";

export const sessionOptions: IronSessionOptions = {
  password: "g]d/@{v(^d3^@82]'CGFrDp2x`M{H%X#",
  cookieName: "dbo_cookies",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// This is where we specify the typings of req.session.* 
declare module "iron-session" { 
  interface IronSessionData { 
    user?: IUser; 
  } 
} 
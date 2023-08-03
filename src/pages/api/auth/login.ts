import { NextApiRequest, NextApiResponse } from 'next';
import { userData } from '@/data/user';
import { setCookie } from '@/utils/cookies';
import { cookieOptions } from '@/lib/cookie';

async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { email, password} = req.body;

        const user = userData.find(
          (user) => user.email === email && user.password === password
        );
    
        if (!user) {
          res.status(401).send({
            error: "Invalid credentials"
          });
        }

        setCookie(res, 'userData', req.body, cookieOptions);
    
        res.status(200).send({
          success: true,
          message: 'Login successful'
        });
      }
      catch (error) {
        res.status(500).send({
          error: 'Internal Server Error'
        });
      }

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).send({
        error: 'Method not allowed'
      })
  }
}

export default handler;

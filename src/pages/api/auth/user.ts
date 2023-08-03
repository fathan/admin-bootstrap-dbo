import { getCookies } from '@/utils/cookies';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {

        const cookies = getCookies(req);
        
        const userData = cookies.userData ? JSON.parse(cookies.userData) : null;

        res.status(200).send({
          user: userData
        });
      }
      catch (error) {
        res.status(500).send({
          error: 'Internal Server Error'
        });
      }

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).send({
        error: 'Method not allowed'
      })
  }
}

export default handler;

import { deleteCookie } from '@/utils/cookies';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        deleteCookie(res, 'userData');
        res.send({
          ok: true
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

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import data from '@/data/customer';
import { FetchMode } from '@/utils/enums';

async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      let dataResponse = null;

      if (req.query.mode === FetchMode.API) {
        const API_URL: string = process.env.NEXT_PUBLIC_API_URL;
        const { id } = req.query;
        const newParams = Object.assign({}, req.query !== undefined ? req.query : {});

        const response = await axios.get(
          API_URL + `/customer/${id}`,
          {
            headers: {
              Accept: 'application/json'
            },
            params: newParams
          }
        );
        
        dataResponse = response.data;
      }
      else if (req.query.mode === FetchMode.Local) {
        dataResponse = data;
      }

      res.status(200).json(dataResponse);
    }
    catch (error) {
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }
  else {
    res.status(405).json({
      error: 'Method not allowed'
    })
  }
}

export default handler
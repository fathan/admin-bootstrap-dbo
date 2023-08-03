import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    try {
      const API_URL: string = process.env.NEXT_PUBLIC_API_URL;
      const { id } = req.query;

      const newParams = Object.assign({}, req.query !== undefined ? req.query : {});
      const response = await axios.delete(
        API_URL + `/order/update/${id}`,
        {
          headers: {
            Accept: 'application/json'
          },
          params: newParams
        }
      );
      
      const dataAPI = response.data;

      res.status(200).json(dataAPI);
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
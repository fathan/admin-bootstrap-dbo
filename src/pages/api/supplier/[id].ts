import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import data from '@/data/supplier';
import { FetchMode } from '@/utils/enums';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      let dataResponse = null;

      if (req.query.mode === FetchMode.API) {
        const API_URL: string = process.env.NEXT_PUBLIC_API_URL;
        const { id } = req.query;
        const newParams = Object.assign({}, req.query !== undefined ? req.query : {});

        const response = await axios.get(
          API_URL + `/supplier/${id}`,
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
        const { id } = req.query;
        const filterData = data.data.filter((item) => item.id === Number(id));

        if (filterData.length) {
          dataResponse = filterData[0];
        }
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
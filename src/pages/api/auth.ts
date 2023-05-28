import { NextApiRequest, NextApiResponse } from "next";

const jwt = require('jsonwebtoken');

export default function handler(req: NextApiRequest, res: NextApiResponse) {  

  console.log(req.body);
  const {username, password} = req.body;
  
  const token = jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: 60 * 60 });

  res.status(200).json({token})
}
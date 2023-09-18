// pages/api/download.ts

import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filename = 'example.pdf'; // Specify the desired filename
    const filePath = path.join(process.cwd(), 'public', 'THOMAS MITHAMO CV-update2.pdf'); // Construct the full path to the file

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      const fileStream = fs.createReadStream(filePath);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      fileStream.pipe(res);
    } else {
      res.status(404).send('File not found');
    }
  } catch (error) {
    console.error('Error downloading the file:', error);
    res.status(500).send('File download error');
  }
}

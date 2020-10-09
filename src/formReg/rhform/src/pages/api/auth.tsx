import { NextApiRequest, NextApiResponse } from 'next'

interface FormData {
  name: string,
  password: string,
  email: string,
  terms: boolean,
  token: string,
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const formData: FormData = req.body

  const errors = await validateData(formData)

  if(errors.length > 0){

    res.status(400)
    res.json({ errors })
    return
  }
  res.status(201)
  res.json({ message:'success!' })
}

async function validateData(formData: FormData): Promise<Array<string>> {
  const errors = []
  const emails = ['ddimojulino@hotmail.com']

  if(emails.includes(formData.email)){
    errors.push('Email already exist')
  }
  return errors
}

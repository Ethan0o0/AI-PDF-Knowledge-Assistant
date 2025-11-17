import {Request, Response} from 'express'
import PDFLoader from '@langchain/community/'

const testPDFPath = "../test.pdf"

export const PDFController = async (req: Request, res: Response) => {
    const loader = new PDFLoader(testPDFPath)
}
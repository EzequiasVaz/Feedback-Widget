import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./uses-cases/submit-feedback-use-case";

export const Routes = express.Router()



Routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenShot } = req.body
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter)

    await submitFeedbackUseCase.execute({
        type, comment, screenShot
    }
    )




    return res.status(201).send()
})
import { MailAdapter } from '../adapters/mail-adapter'
import { FeedbacksRepository } from '../repositories/feedback-repository'

interface SubmitFeedbackUseCaseRequest {
    type: string
    comment: string
    screenShot?: string
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) { }

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenShot } = request

        await this.feedbacksRepository.create({
            type,
            comment,
            screenShot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div style = "font-size:16px; font-family:sans-serif; color: #222;">`,
                `<p>Tipo de Feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenShot ? `Screenshot: <br> <img style="width:500px;" src="${screenShot}"/>` : null,
                `</div>`
            ].join('\n')
        })


    }
}
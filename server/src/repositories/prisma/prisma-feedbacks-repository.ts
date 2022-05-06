import { FeedbacksCreateData, FeedbacksRepository } from "../feedback-repository";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenShot }: FeedbacksCreateData) {
        await prisma.feedback.create(
            {
                data: {
                    type,
                    comment,
                    screenShot
                }
            }
        )
    }
}   
export interface FeedbacksCreateData {
    type: string
    comment: string
    screenShot?: string
}

export interface FeedbacksRepository {
    create: (data: FeedbacksCreateData) => Promise<void>
}
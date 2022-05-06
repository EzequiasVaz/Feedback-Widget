
import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { api } from "../../../lib/api"
import { CloseButton } from "../../CloseButton"
import { FeedbackType, feedbackTypes } from "../Index"
import { Loading } from "../Loading"
import { ScreenshotButton } from "../ScreenshotButton"


interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {

    const [screenShot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        setIsSendingFeedback(true)
        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenShot
        })
        setIsSendingFeedback(false)
        onFeedbackSent()
    }


    return (
        <>
            <header>
                <button onClick={onFeedbackRestartRequested} type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100" title='Voltar para escolha do feedback'>
                    <ArrowLeft weight="bold" className="h-4 w-4" />
                </button>
                <span className="text-xl leading-5 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className="flex flex-col my-4 gap-2 w-full" onSubmit={handleSubmitFeedback}>

                <textarea
                    className="bg-transparent rounded-[4px] text-sm placeholder-zinc-500 min-w-[304px] w-full min-h-[112px] outline-none border-zinc-600 focus:border-brand-500 focus:ring-brand-500 focus:ring-[1.5px] resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)} />

                <footer className='flex gap-2'>
                    <ScreenshotButton
                        screenshot={screenShot}
                        onScreenShotTook={setScreenshot} />
                    <button
                        type="submit"
                        disabled={comment.length == 0 || isSendingFeedback}
                        className="p-2 bg-brand-500 opacity-100 disabled:opacity-50 disabled:hover:bg-brand-500 text-sm leading-5 font-medium rounded-[4px] flex-1 flex justify-center items-center border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors hover:bg-brand-200"
                    >
                        {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
                    </button>
                </footer>
            </form>
        </>
    )
}
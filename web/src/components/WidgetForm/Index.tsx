import { useState } from "react";
import { CloseButton } from ".././CloseButton";

import bugImage from "../../assets/bug.svg"
import ideaImage from "../../assets/idea.svg"
import thoughtImage from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";


export const feedbackTypes = {

    BUG: {
        title: 'Problema',
        image: {
            src: bugImage,
            alt: 'Imagem de um inseto'
        }
    },

    IDEA: {
        title: 'Ideia',
        image: {
            src: ideaImage,
            alt: 'Imagem de uma lampada'
        }
    },

    OTHER: {
        title: 'Outro',
        image: {
            src: thoughtImage,
            alt: 'Imagem de um balão'
        }
    },

}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedBackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedBackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 rounded-2xl relative mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? ( 
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : 
            <>
                {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) :
                <FeedbackContentStep                    
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                    onFeedbackSent = {() => setFeedBackSent(true)}
                />}

            </>
}


            <footer className='text-neutral-400 text-xs'>
                Feito com ♥ pela <a className='underline underline-offset-2' href="https://www.rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    )

}
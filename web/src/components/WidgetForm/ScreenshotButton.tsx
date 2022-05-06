import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
    screenshot: string | null
    onScreenShotTook: (screenshot: string | null) => void
}

export function ScreenshotButton( {screenshot, onScreenShotTook}: ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false) 

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png')

        onScreenShotTook(base64Image)
        setIsTakingScreenshot(false)
    }

    if (screenshot) {
        return <button 
        type="button"
        onClick={() => onScreenShotTook(null)}
        className="p-1 w-10 h-10 border-transparent flex justify-end items-end text-zinc-100 hover:text-zinc-400"
        style={{backgroundImage: `url(${screenshot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 180

    }}
        >
            <Trash weight="fill"/>
        </button>
    }

    return (
        <button
            type="button"
            className="bg-zinc-800 p-2 rounded-[4px] text-zinc-100 opacity-50 border-transparent hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
            onClick={handleTakeScreenshot}>
            {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6"/>}
        </button>
    )

}
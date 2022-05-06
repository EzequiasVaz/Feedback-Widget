import { CircleNotch } from "phosphor-react";



export function Loading() {
    return (
        <div className="flex justify-center items-center p-1">
            <CircleNotch className="w-4 h-4 animate-spin"/>
        </div>
    )
}
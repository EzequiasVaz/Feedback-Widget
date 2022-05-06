import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm/Index'

export function Widget() {
   
    return (        
        <Popover className='absolute right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col items-end'>
           <Popover.Panel> <WidgetForm/> </Popover.Panel>
            <Popover.Button className='flex text-align-center bg-brand-500 radius-100 p-3 rounded-full text-white group drop-shadow-widget' >
                <ChatTeardropDots className='w-6 h-6' />
                <span className='font-medium max-w-0 overflow-hidden group-hover:max-w-xs group-focus-visible:max-w-xs transition-all ease-linear duration-500'>
                    <span className='ml-2'></span>  
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
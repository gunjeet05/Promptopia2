import React from 'react'
import Image from 'next/image';
import Link from "next/navigation"
const PromptCard = ({prompt}) => {

    console.log("Prompt in prompt card",prompt);
  return (
    
    <div className='flex flex-col p-4 bg-white/10 bg-clip-padding rounded-md gap-3 backdrop-filter backdrop-blur-lg'>
        <div className='flex justify-start gap-5'>
            <Image src={prompt.userId.image} width={40} height={40} className='rounded-full object-cover '/>
            <div className='flex flex-col'>
                <p>
                    {prompt.userId.username}
                </p>
                <p className='text-blue-500'>
                    {prompt.userId.email}
                </p>
            </div>

            
            
        </div>
        <div>
            {
                prompt.prompt
            }

        </div>
        <div>
            {prompt.tag}
        </div>


      
    </div>
  )
}

export default PromptCard;

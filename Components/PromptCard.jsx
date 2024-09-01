"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Link, { usePathname, useSearchParams} from "next/navigation";
import { handleClientScriptLoad } from 'next/script';
import { useSession } from 'next-auth/react';
//import User from '@models/User';


const PromptCard = ({prompt}) => {
    const{data:session}=useSession();
    const[copied, setCopied]=useState(false);
    //const [SearchParam ,setSearchParam]=useSearchParams();
    const pathname=usePathname();
    //console.log("Prompt in prompt card",promp);
    console.log("SearchParam", pathname);
    const handleClick=()=>{
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
            navigator.clipboard.writeText(prompt.prompt);
        }, 3000);
    }
  return (
    
    <div className='flex flex-col p-4 bg-white/10 bg-clip-padding rounded-md gap-3 backdrop-filter backdrop-blur-lg border-2' >
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
            <div className='ml-auto'>
                <Image
                    src={!copied?"/assets/icons/copy.svg":"/assets/icons/tick.svg"}
                    width={15}
                    height={15}
                alt='image'
                onClick={handleClick}/>     
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

        {
            pathname=="/profile"&&session?.user.id===prompt.userId._id &&
            <div className='flex justify-center gap-2 text-orange-500 '>
                <p className='cursor-pointer hover:text-orange-800'>Edit</p>
                <p className='cursor-pointer hover:text-orange-800'>Delete</p>

            </div>

        }




      
    </div>
  )
}

export default PromptCard;

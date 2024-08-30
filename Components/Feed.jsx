"use client"

import React, { useEffect } from 'react';
import { useState } from 'react';

import PromptCard from './PromptCard';
const Feed = () => {
    const [prompts, setPrompts]=useState([]);

    
    const getPrompts=async()=>{
        const result=await fetch("/api/prompt",{
            method:"GET"
        })

        const data=await result.json();
        setPrompts(data);
        console.log("Data from backend", data);
        
        console.log("Prompts list",prompts);
    
    }
    
    useEffect(()=>{
        getPrompts();
        
    },[])
    
  return (
    <div className="feed">
      <form className="relative w-full max-w-full h-20"> {/* Added height to the form */}
        <input
          type="text"
          placeholder="Search for prompts..."
          className="search_input" 
          required

        />
      </form>


        <div className='flex flex-col gap-5'>
            {
                

                prompts.length>0 &&
                prompts.map((val, ind)=>{
                    
                    return <PromptCard prompt={val} key={ind}/>
                })
            }


        </div>

    </div>
  );
};

export default Feed;

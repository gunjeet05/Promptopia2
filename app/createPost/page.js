"use client"

import React, { useState } from 'react'
import Form from '@Components/Form'
import { useSession } from 'next-auth/react';

import { useRouter } from 'next/navigation';



export default function CreatePage() {
  const [data, setData]=useState({prompt:'', tag:''});
  const [submitting, setSubmitting]=useState(false);
  const {data:session}=useSession();

  const router=useRouter();
  console.log(data);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    //console.log("session in prompts", session.user.id);
    try{
      setSubmitting(true);
    const res=await fetch('/api/prompt/newPrompt',{
        method:"POST",
        body:JSON.stringify({
          prompt:data.prompt,
          userId:session?.user.id,
          tag:data.tag,
        
        })

        
      
    })

    if(res.ok){
      router.push("/");
    }
  
  
    console.log(res);
  }
    catch(err){
      console.log("Error occured while in new Prompt", err);
    }
    finally{
      setSubmitting(false);
    }

    

  }



  return (
    <div>
      <Form data={data} setData={setData} handleSubmit={handleSubmit} type={'Create'} submitting={submitting}/>
      
    </div>
  )
}



"use client";

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Form from '@Components/Form';

const page = () => {
    const[data, setData]=useState();
    const [loader, setLoader]=useState();
    
    const searchParam=useSearchParams();
    const id=searchParam.get('id');
    const getData=async()=>{
      const res=await fetch( `/api/prompt/${id}`);
      const resData=await res.json();
      console.log("Response prompts",resData);
    }
    
    useEffect(()=>{
      getData();
      
    },[id])
    
    console.log(id);
  return (
    <div>
        <Form  />
      
    </div>
  )
}

export default page

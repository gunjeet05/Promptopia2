"use client"
import Profile from "@Components/Profile";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Page = () => {
  const {data:session}=useSession();
  const [prompts, setPrompts]=useState([]);
  
  const getPrompts=async()=>{
    if(session?.user.id){
    const res=await fetch(`/api/userPost/${session?.user.id}`);
    const data=await res.json();
    setPrompts(data);
    //console.log("Data from backend", await res.json());
  }
}

  useEffect(()=>{
    getPrompts();
    
  },[session?.user.id])

  return (
    <div className="flex-center mt-20">
      <Profile name={"My"} prompt={prompts}/>
    </div>
  )
}

export default Page

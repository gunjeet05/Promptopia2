"use client"

import React from 'react'
import PromptCard from './PromptCard'
const Profile = ({name, prompt}) => {
  return (
    <div>
        <p className="text-4xl pb-8 font-bold bg-gradient-to-r from-blue-600 to-green-600   bg-clip-text text-transparent">
            {name} Profile
        </p>
        {
        prompt.map((val, ind)=>{
            return <PromptCard key={ind} prompt={val} />
        })
    }

      
    </div>
  )
}

export default Profile

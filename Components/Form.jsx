"use client"

import React from 'react'
import Link from 'next/link'

const Form = ({data, setData, submitting, type, handleSubmit}) => {
  return (
    <div>
        <div >
        <p className='blue_gradient text-3xl font-bold pt-8'>{type} Post</p>
        <p className='pt-3 text-base'>
            Create and share amazing prompts with your family and friends.
        </p>

        <form className='flex flex-col glassmorphism form_input'>
            <label htmlFor="prompt">Your AI prompt</label>
            <textarea name="prompt" id="prompt" placeholder='Write your prompt here' required className='form_input' onChange={(e)=>{
                setData({
                    ...data,
                    prompt:e.target.value
                })
            }}></textarea>
            <label className="" htmlFor="tag">Tag(#product, #development)</label>
            <input className='form_input' type="text" name='tag' placeholder='#tag' required onChange={(e)=>{
                setData({
                    ...data,
                    tag:e.target.value
                })
            }} />
            <div className='flex flex-end gap-2 pt-3'>
                <Link href={'#'}>
                    Cancel
                </Link>

                <button className='bg-primary-orange text-white px-2 py-1 rounded-full text-sm' disabled={submitting} onClick={handleSubmit}>{submitting?`Loading`:type}</button>


            </div>
        </form>
        </div>
     
    </div>
  )
}

export default Form

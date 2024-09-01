"use client";

import Link from "next/link"
import Image from "next/image";
import { useEffect, useState } from "react";
import {signIn, SignOut, useSession, getProviders, signOut} from 'next-auth/react'


const Nav = () => {
    const {data:session} = useSession();
    const [provider, setProvider]=useState({});
    const [toggle, setToggle]=useState(false);

    useEffect(()=>{
        (async ()=>{
            const res=await getProviders();
            setProvider(res);
        })();

       
    },[])

  return (
    <div className="w-full flex justify-between pt-2 object-cover">
        <Link href='/' className="flex gap-2 items-center">

        <Image src={"/assets/images/logo.svg"}  alt="image" height={30} width={30}/>
        <p className="logo_text">
            Promptopia
        </p>
        </Link>
        {/*Desktop */}
        <div className="sm:flex hidden">
            {console.log("Session in ", session)}
            {session?.user? <div className="flex gap-2">
                <Link href={'/createPost'}>
                <button className="black_btn">Create Post</button>
                </Link>
                
                <button  className="black_btn" onClick={()=>signOut()}>SignOut</button>
               
                <Link href={'/profile'}>
                <Image  className="rounded-full" src={session.user.image} alt="imageProfile" height={31} width={31}/>
                </Link>

            </div>:<div>
                {console.log("Provider in nav", Object.values(provider))}
                    {provider&& 
                        
                        Object.values(provider).map((val, ind)=>{

                            {console.log("here")}
                            return <button className="black_btn" key={val.name} onClick={()=>{
                                signIn(val.id)
                            }}>Sign In</button>
                        })
                    }
                </div>}

        </div>

        {/**mobile */}
        <div className="sm:hidden flex flex-col relative items-center">
        <Image src={"/assets/images/logo.svg"} alt="imageProfile" height={31} width={31} onClick={()=>setToggle((prev)=>!prev)}/>
        {
            toggle && 
            <div className="dropdown items-center">
                {
                   session?.user?<div className="flex flex-col items-center justify-center">

                        
                        <Link href={"/profile"} className="dropdown_link">
                        Profile
                        </Link>
                        <Link href={"/createPost"} className="dropdown_link">
                        Create Post
                        </Link>
                        <Link href={"/profile"} className="dropdown_link">
                        Profile
                        </Link>
                        <button className="black_btn w-full">Sign Out</button>




                    </div>:<div>

                    {
                        provider&& 
                        Object.values(provider).map((val, ind)=>{
                            <button className="black_btn" key={ind} onClick={()=>{
                                signIn(provider.id)
                            }}>Sign In</button>
                        })
                    }
                    </div>
                }
               
            </div>
        }

        </div>
       
      
    </div>
  )
}

export default Nav

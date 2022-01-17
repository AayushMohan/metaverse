import Image from 'next/image'
import React from 'react'

export const Login = () => {
 return (
  <div className="bg-black relative">
   <h1>I'm the login screen</h1>
   <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
    <Image className="object-cover rounded-full" src="https://avatars.githubusercontent.com/u/66319691?v=4" height={200} width={200}/>

    <button>Login to the METAVERSE</button>
   </div>

   <div className="w-full h-screen">
    <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
   </div>

  </div>
 )
}

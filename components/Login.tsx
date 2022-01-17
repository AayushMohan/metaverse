import Image from 'next/image'
import React from 'react'

export const Login = () => {
 return (
  <div className="bg-black relative text-white">
   <h1>I'm the login screen</h1>
   <div>
    {/* Papafam Logo */}
    <Image src="https://links.papareact.com/3pi" height={200} width={200}/>

    {/* Login button */}
    <button>Login to the METAVERSE</button>
   </div>

   <div className="w-full h-screen">
    <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
   </div>

  </div>
 )
}

import Image from 'next/image'
import React from 'react'

export const Login = () => {
 return (
  <div className="bg-black relative text-white">
   <h1>I'm the login screen</h1>
   <div>
    {/* Papafam Logo */}

    {/* Login button */}
   </div>

   <div className="w-full h-screen">
    <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
   </div>

  </div>
 )
}

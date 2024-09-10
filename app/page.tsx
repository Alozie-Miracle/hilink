'use client'
import { useState } from 'react'
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        {toggle && (
            <div className='lg:hidden flex w-full h-screen fixed top-0 z-50 bg-black/50'>
                <div className='h-full w-1/2' onClick={() => setToggle(false)} />
                <Sidebar setToggle={setToggle} />
            </div>
        )}
      <Navbar setToggle={setToggle} />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  )
}